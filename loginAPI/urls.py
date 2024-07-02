
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from back import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('back.urls', namespace='back')),
    path('api/', include('back.urls', namespace='back_api')),
]