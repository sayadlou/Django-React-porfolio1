from django.db import models
from django.utils import timezone


class Post(models.Model):
    STATUS = (
        ('Published', 'Published'),
        ('Draft', 'Draft'),
        ('Trash', 'Trash'),
    )
    title = models.CharField(max_length=200)
    content = models.TextField(max_length=4000)
    status = models.CharField(max_length=50, choices=STATUS)
    view = models.BigIntegerField(null=True, blank=True, default=0)
    picture = models.ImageField(null=True, blank=True)
    tag = models.CharField(max_length=50)
    pub_date = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
