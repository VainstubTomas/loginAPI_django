from django.db import models


# Create your models here.
class User(models.Model):
    name = models.TextField(max_length=100, default="")
    lastname = models.TextField(max_length=100, default="")
    dni = models.CharField(max_length=8, default="")
    password = models.TextField(max_length=100, default="")

    def __str__(self):
        return self.User