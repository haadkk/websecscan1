import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const R = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [scanResults, setScanResults] = useState(null);
  const [status, setStatus] = useState("queued");
  const [error, setError] = useState(null);

  const scanId = location.state?.scanId;
  const targetUrl = location.state?.targetUrl;

  useEffect(() => {
    if (!scanId) {
      navigate("/"); // Redirect to home if no scan ID is found
      return;
    }
  
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/scan-results/${scanId}/`);
  
        if (response.data.status === "completed") {
          setScanResults(response.data);
          setStatus("completed");
        } else if (response.status === 404) {
          console.log("Results not ready yet, retrying...");
        } else {
          setError(response.data.error || "Unexpected error while fetching results.");
        }
      } catch (err) {
        console.error("Error fetching results:", err);
        setError("An unexpected error occurred.");
      }
    };
  
    const interval = setInterval(() => {
      if (status === "completed" || error) {
        clearInterval(interval); // Stop polling if completed or failed
      } else {
        fetchResults();
      }
    }, 5000); // Poll every 5 seconds
  
    return () => clearInterval(interval);
  }, [scanId, status, error, navigate]);
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (status === "queued") {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-yellow-500 text-xl">Scan in progress, please wait...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Scan Results for: {targetUrl}</h1>
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <p className="text-lg">Status: <span className="text-green-400">Completed</span></p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Stats</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Harmless:</p>
            <p className="text-green-400 text-xl">{scanResults?.stats?.harmless || 0}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Malicious:</p>
            <p className="text-red-400 text-xl">{scanResults?.stats?.malicious || 0}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Suspicious:</p>
            <p className="text-yellow-400 text-xl">{scanResults?.stats?.suspicious || 0}</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Detailed Engine Results</h2>
        <div className="bg-gray-700 p-4 rounded-lg">
          {scanResults?.results ? (
            Object.entries(scanResults.results).map(([engine, result]) => (
              <div key={engine} className="mb-4 border-b border-gray-600 pb-2">
                <p className="text-lg font-semibold text-yellow-400">{engine}</p>
                <p>Category: <span className="text-green-400">{result.category}</span></p>
                <p>Detection: <span className="text-red-400">{result.result || "No detection"}</span></p>
              </div>
            ))
          ) : (
            <p>No detailed results available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default R;
