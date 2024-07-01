from django.shortcuts import render
from rest_framework import viewsets
from .serializer import userSerializer
from .models import User

# Create your views here.

class userViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = userSerializer
    # previamente creado dentro de serializers e importado arriba
