from django.urls import path
from .views import userList, userDetail

app_name = 'back'

urlpatterns = [
    path("",userList.as_view(), name="listcreate"),
    path("<int:pk>/",userDetail.as_view(), name="detailcreate")
]


#<int:pk> sirve para aclarar que ese link se pasara un entero y una primary key
"""En este caso utilizado para pasar el numero de id del propio user,
es entero y funciona como pk"""