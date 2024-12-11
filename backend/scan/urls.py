from django.urls import path
from . import views

urlpatterns = [
    path("scan-url/", views.scan_url, name="scan_url"),  # URL submission endpoint
]
