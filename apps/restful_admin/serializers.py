from rest_framework import serializers

from ..account.models import SocialNetwork, UserProfile
from ..blog.models import Post
from ..core.models import Portfolio, Experience, Skill, Message


class PostSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = Post
        fields = '__all__'
        extra_kwargs = {
            # 'password': {
            #     'write_only': True,
            #     'style': {'input_type': 'password'}
            # }
        }


class SkillSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = Skill
        fields = '__all__'
        extra_kwargs = {
            # 'password': {
            #     'write_only': True,
            #     'style': {'input_type': 'password'}
            # }
        }


class SocialNetworkSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = SocialNetwork
        fields = '__all__'
        extra_kwargs = {
            # 'password': {
            #     'write_only': True,
            #     'style': {'input_type': 'password'}
            # }
        }


class ExperienceSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = Experience
        fields = '__all__'
        extra_kwargs = {
            # 'password': {
            #     'write_only': True,
            #     'style': {'input_type': 'password'}
            # }
        }


class PortfolioSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = Portfolio
        fields = '__all__'
        extra_kwargs = {
            # 'password': {
            #     'write_only': True,
            #     'style': {'input_type': 'password'}
            # }
        }


class MessageSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = Message
        fields = '__all__'
        extra_kwargs = {
            # 'password': {
            #     'write_only': True,
            #     'style': {'input_type': 'password'}
            # }
        }


class UserProfileSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = UserProfile
        # fields = ('id','first_name','last_name', 'email', 'password')
        # fields = '__all__'
        exclude = ('password', 'is_staff', 'groups', 'user_permissions')


class PasswordSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = UserProfile
        fields = ('password',)
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'}
            }
        }
