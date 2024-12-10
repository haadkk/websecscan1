from django.urls import path
from . import views

urlpatterns = [
    path("scan-url/", views.scan_url, name="scan_url"),  # URL submission endpoint
    path("scan-results/<str:scan_id>/", views.get_scan_results, name="get_scan_results"),  # Fetch results endpoint
]
