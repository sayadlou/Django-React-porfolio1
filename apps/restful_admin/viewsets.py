from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.http import Http404
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import NotAcceptable
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from .permissions import UpdateOwnProfile
from .serializers import *
from . import filters
from ..core.models import Message


class MyViewSet(viewsets.ModelViewSet):
    """Handle creating and updating profiles"""
    authentication_classes = (TokenAuthentication,)
    # permission_classes = (permissions.IsAdminUser,)
    # filter_backends = (filters.SearchFilter,)
    # search_fields = ('title',)


class PostViewSet(MyViewSet):
    """Handle creating and updating profiles"""
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    # filterset_class = filters.PostFilter
    # search_fields = ["title"]


class SkillViewSet(MyViewSet):
    """Handle creating and updating profiles"""
    serializer_class = SkillSerializer
    queryset = Skill.objects.all()


class SocialNetworkViewSet(MyViewSet):
    """Handle creating and updating profiles"""
    serializer_class = SocialNetworkSerializer
    queryset = SocialNetwork.objects.all()


class ExperienceViewSet(MyViewSet):
    """Handle creating and updating profiles"""
    serializer_class = ExperienceSerializer
    queryset = Experience.objects.all()


class PortfolioViewSet(MyViewSet):
    """Handle creating and updating profiles"""
    serializer_class = PortfolioSerializer
    queryset = Portfolio.objects.all()


class UserProfileViewSet(mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.ListModelMixin,
                         GenericViewSet):
    """Handle creating and updating profiles"""
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (UpdateOwnProfile, permissions.IsAdminUser)
    # filter_backends = (SearchFilter,)


class PasswordViewSet(mixins.UpdateModelMixin,
                      # mixins.ListModelMixin,
                      GenericViewSet):
    """Handle creating and updating profiles"""
    serializer_class = PasswordSerializer
    queryset = UserProfile.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (UpdateOwnProfile, permissions.IsAdminUser)

    # filter_backends = (SearchFilter,)

    def update(self, request, *args, **kwargs):
        print(request.data)
        print(request.user)
        if (request.user.is_authenticated):
            user = get_object_or_404(UserProfile, email=request.user.email)
            try:
                validate_password(request.data["password"], user)
                user.set_password(request.data["password"])
                user.save()
                return Response({"found": "ok"})
            except ValidationError:
                NotAcceptable()

        return Response(request.data)


class ContactProfileViewSet(mixins.RetrieveModelMixin,
                            mixins.DestroyModelMixin,
                            mixins.ListModelMixin,
                            GenericViewSet):
    """Handle creating and updating profiles"""
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    # filter_backends = (SearchFilter,)
