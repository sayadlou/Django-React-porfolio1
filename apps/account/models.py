from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import BaseUserManager
import datetime

from rest_framework.authtoken.models import Token


class UserProfileManager(BaseUserManager):
    """"Manager for user profile"""

    def create_user(self, email, password=None):
        """"Create a new user profile"""
        if not email:
            raise ValueError(_('Users must have an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """Create and save a new superuser with given details"""
        user = self.create_user(email, password)
        token = Token.objects.create(user=user)
        # print(token.key)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class SocialNetwork(models.Model):
    ICON = (
        ('fa fa-instagram', 'Instagram'),
        ('fa fa-facebook', 'Facebook'),
        ('fa fa-linkedin', 'LinkedIn'),
        ('fa fa-twitter', 'Twitter'),
        ('fa fa-pinterest', 'Pinterest'),
        ('fa fa-tumblr', 'Tumblr'),
        ('fa fa-flickr', 'Flickr'),
        ('fa fa-reddit', 'Reddit'),
    )
    title = models.CharField(max_length=50)
    icon = models.CharField(max_length=20, choices=ICON)
    link = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class UserProfile(AbstractBaseUser, PermissionsMixin):
    """Database model for user in system"""
    first_name = models.CharField(max_length=50, blank=True, default="Mohamad R")
    last_name = models.CharField(max_length=50, blank=True, default="Sabery")
    description = models.CharField(max_length=200, blank=True,
                                   default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .")
    birth_date = models.DateField(default=datetime.date.today)
    title = models.CharField(max_length=50, blank=True, default="Mechanical Engineer")
    address = models.CharField(max_length=200, blank=True, default="")
    phone_number = models.CharField(max_length=50, blank=True, default="")
    email = models.CharField(max_length=50, unique=True)
    skype_id = models.CharField(max_length=50, blank=True, default="@sabery")
    linkedin_id = models.CharField(max_length=50, blank=True, default="linkedin.com/sabery")
    languages = models.CharField(max_length=50, blank=True, default="")
    years_of_experience = models.CharField(max_length=50, blank=True, default="5")
    cv = models.FileField(blank=True, null=True, default='settings.MEDIA_ROOT/CV.pdf')
    picture = models.ImageField(blank=True, null=True, default='settings.MEDIA_ROOT/pp.jpg')
    picture_small = models.ImageField(blank=True, null=True, default='settings.MEDIA_ROOT/p.jpg')
    thanks_message = models.TextField(max_length=500,
                                      default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .")
    contact_title = models.TextField(max_length=500,
                                     default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .")
    contact_message = models.TextField(max_length=500,
                                       default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .")
    social_network = models.ManyToManyField(SocialNetwork)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def get_full_name(self):
        """Retrieve full name for user"""
        return f"{self.first_name} {self.last_name}"

    def get_short_name(self):
        """Retrieve short name of user"""
        return self.first_name

    def __str__(self):
        """Return string representation of user"""
        return self.email
