from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100, null=False)
    little_description = models.CharField(max_length=250, null=False)
    description = models.TextField(null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(null=False, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image_url = models.ImageField(upload_to='images/', blank=True, null=True)
    
    def __str__(self):
        return self.name