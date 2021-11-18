from django.db.models.signals import post_save

from .models import Post


def post_added(sender, instance, created, **kwargs):
    if created:
        print('Post created!')


post_save.connect(post_added, sender=Post)
