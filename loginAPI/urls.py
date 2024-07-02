
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from back import views

router = DefaultRouter()
router.register(r"users", views.userViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
]
