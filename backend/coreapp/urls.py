from django.urls import path

from .views import (
    upload_csv,
    get_records,
    approve_record
)

urlpatterns = [
    path('upload/', upload_csv),
    path('records/', get_records),
    path('approve/<int:record_id>/', approve_record),
]