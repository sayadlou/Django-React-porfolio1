from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .settings import MEDIA_URL, MEDIA_ROOT, STATIC_URL, STATIC_ROOT
from django.conf.urls.static import static
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    path('admin2/', admin.site.urls),
    path('admin/', include(('apps.restful_admin.urls', 'apps.restful_admin'), namespace='restful_admin')),
    path('', include(('apps.core.urls', 'apps.core'), namespace='core')),
    path('blog/', include(('apps.blog.urls', 'apps.blog'), namespace='blog')),
    path("api-token-auth/", ObtainAuthToken.as_view()),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

]
urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
urlpatterns += static(STATIC_URL, document_root=STATIC_ROOT)
