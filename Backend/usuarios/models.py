from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username            = models.CharField(max_length = 100, unique=True, null=False)
    first_name          = None
    last_name           = None
    email               = models.EmailField(max_length=50, unique=True, null=False)
    password            = models.CharField(max_length=255, null=False)
    groups              = None
    user_permissions    = None
    is_staff            = models.BooleanField(default=False)
    is_active           = models.BooleanField(default=True)
    is_superuser        = models.BooleanField(default=False)
    last_login          = None
    date_joined         = None

    def __str__(self):
        return self.username