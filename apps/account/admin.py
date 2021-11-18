from django.contrib import admin

# Register your models here.
from .models import UserProfile, SocialNetwork

admin.site.register(UserProfile)
admin.site.register(SocialNetwork)
