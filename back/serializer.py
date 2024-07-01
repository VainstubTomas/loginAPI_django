from rest_framework import serializers
from .models import User


class userSerializer(serializers.ModelSerializer):
    class meta:
        model = User
        fields = "__all__"
