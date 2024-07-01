from django.db import models


# Create your models here.
class User(models.Model):
    name = models.TextField(max_length=100)
    lastname = models.TextField(max_length=100)
    dni = models.CharField(max_length=8)
    password = models.TextField(max_length=100)
