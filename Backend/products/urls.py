from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet, 'products')

urlpatterns = [
    path('v1/', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
