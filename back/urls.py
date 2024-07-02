from django.urls import path
from .views import userList, userRetrieve

app_name = 'back'

urlpatterns = [
    path("",userList.as_view(), name="listcreate"),
    path("detail/",userList.as_view(), name="detailcreate")
]
