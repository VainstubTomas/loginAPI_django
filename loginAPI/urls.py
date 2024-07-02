
from django.contrib import admin
from django.urls import path, include
from back import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('back.urls', namespace='back')),
    path('',include('back.urls', namespace='back'))
]