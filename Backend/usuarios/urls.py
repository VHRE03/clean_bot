from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from .views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, 'users')

urlpatterns = [
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('api/', include(router.urls))
]