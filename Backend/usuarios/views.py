from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .models import User
from .serializer import UserSerializer
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth import authenticate, login

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def create(self, request, *args, **kwargs):
        
        # Serializar los datos del usuario
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Guardar el usuario
        user = serializer.save()
        
        # Crear el token para el nuevo usuario
        token = Token.objects.create(user=user)
        
        # Devolver la respuesta con el token y los datos del usuario
        return Response({'user': serializer.data, 'token': token.key}, status=status.HTTP_201_CREATED);
            
class UserLogin(APIView):
    def post(self, request):
        
        user = authenticate(username = request.data['username'], password = request.data['password'])
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
  
# Obtener los datos del usuario por medio del token
class UserData(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        
        # Obtener el usuario autenticado
        user = request.user
        
        # Serializar los datos del usuario
        serializer = UserSerializer(user)
        
        # Devuelve los datos serializados
        return Response(serializer.data)