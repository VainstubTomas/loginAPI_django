from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializer import userSerializer
from .models import User

# Create your views here.

# class userViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = userSerializer
    # previamente creado dentro de serializers e importado arriba

"""Ambas views generadas abajo realizan los metodos cruds para trabajar apropiadamente
con los datos, solo hay que pasarle algunos parametros aclarados en las lineas internas"""

class userList(generics.ListCreateAPIView): 
    queryset = User.objects.all()   #Hacemos una query para traer todos los datos en este caso de user
    serializer_class = userSerializer   #Serializar: convertir datos al formato correcto (en este caso de py a json)
    pass               #De esta manera tomamos todos los datos y luego lo serializamos                         

"""ListCreateAPIView -> Used for read-write endpoints to represent a collection of model instances.
Provides get and post method handlers"""

class userDetail(generics.RetrieveDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = userSerializer    
    pass  

"""RetrieveDestroyAPIView -> Used for read or delete endpoints to represent a single model instance.
Provides get and delete method handlers."""                                              