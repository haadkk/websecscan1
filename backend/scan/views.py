import json
import time
import re
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

# API Key from settings
API_KEY = settings.VIRUSTOTAL_API_KEY


def map_to_tests(analysis_results):
    """
    Map VirusTotal analysis results to descriptive tests performed.
    """
    tests = []
    for engine, result in analysis_results.items():
        if result["category"] == "malicious":
            tests.append(f"Checked for malicious activity using {engine}")
        elif result["category"] == "suspicious":
            tests.append(f"Checked for suspicious activity using {engine}")
        else:
            tests.append(f"Checked for clean status using {engine}")
    return tests


@csrf_exempt
def scan_url(request):
    if request.method == "POST":
        try:
            # Parse the incoming request
            data = json.loads(request.body)
            target_url = data.get("url")

            # Validate the target URL
            if not target_url or not re.match(r"^https?://", target_url):
                return JsonResponse({"error": "Invalid URL format"}, status=400)

            print(f"Target URL Received: {target_url}")

            # Submit URL to VirusTotal
            virustotal_endpoint = "https://www.virustotal.com/api/v3/urls"
            headers = {"x-apikey": API_KEY}
            response = requests.post(
                virustotal_endpoint, headers=headers, data={"url": target_url}
            )

            if response.status_code != 200:
                print("VirusTotal Submission Failed:", response.json())
                return JsonResponse({"error": response.json()}, status=response.status_code)

            # Extract analysis link from the response
            result = response.json()
            print("Raw VirusTotal Response:", json.dumps(result, indent=4))
            analysis_link = result["data"]["links"]["self"]

            # Poll for analysis results
            print("Starting the polling loop for VirusTotal analysis results...")
            for attempt in range(10):  # Retry up to 20 times
                print(f"Polling attempt {attempt + 1}...")

                try:
                    # Make the request to the self-analysis link
                    analysis_response = requests.get(analysis_link, headers=headers)
                    print(f"Polling Response Status: {analysis_response.status_code}")

                    if analysis_response.status_code == 200:
                        analysis_result = analysis_response.json()
                        print("Polling Response Content:", json.dumps(analysis_result, indent=4))

                        # Extract analysis results if available
                        attributes = analysis_result.get("data", {}).get("attributes", {})
                        if "last_analysis_results" in attributes:
                            print("Analysis results are available!")

                            analysis_results = attributes.get("last_analysis_results", {})
                            detection_stats = attributes.get("last_analysis_stats", {})

                            # Build the final response
                            response_data = {
                                "target": target_url,
                                "scanType": "Light",
                                "isAuthenticated": False,
                                "performedTests": map_to_tests(analysis_results),
                                "findings": analysis_results,
                                "detection_ratios": detection_stats,
                            }

                            print("Final Backend Response:", json.dumps(response_data, indent=4))
                            return JsonResponse(response_data, status=200)

                except requests.exceptions.RequestException as e:
                    print(f"Error in polling request: {str(e)}")

                print("No results yet. Retrying in 5 seconds...")
                time.sleep(5)

            # If no results after polling
            print("Analysis timed out after 20 attempts.")
            return JsonResponse({"error": "Analysis timed out"}, status=504)

        except Exception as e:
            print("An unexpected error occurred:", str(e))
            return JsonResponse({"error": f"An unexpected error occurred: {str(e)}"}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)
