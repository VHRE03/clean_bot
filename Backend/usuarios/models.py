from django.db import models
from django.utils import timezone

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length = 100, unique = True, null = False)
    email = models.EmailField(max_length=50, unique=True, null=False)
    password = models.CharField(max_length=255, null=False)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.username