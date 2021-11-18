from django.urls import path, include, re_path
from django.views.generic import TemplateView

from rest_framework.routers import DefaultRouter

from ..restful_admin.viewsets import *

router = DefaultRouter()
router.register('post', PostViewSet)
router.register('skill', SkillViewSet)
router.register('socialnetwork', SocialNetworkViewSet)
router.register('experience', ExperienceViewSet)
router.register('portfolio', PortfolioViewSet)
router.register('profile', UserProfileViewSet)
router.register('contact', ContactProfileViewSet)
router.register('password', PasswordViewSet)


urlpatterns = [
    path('apiv1/', include(router.urls)),
    re_path('(^(?!(apiv1)).*$)', TemplateView.as_view(template_name="restful_admin/index.html"), name='admin'),

]
