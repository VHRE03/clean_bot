from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, UserLogin, UserData

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, 'users')

urlpatterns = [
    path('users-api/', include(router.urls)),
    path('users-api/login/', UserLogin.as_view(), name='login'),
    path('users-api/user-login/', UserData.as_view(), name='user-data'),
]