from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class Experience(models.Model):
    """"""
    types = (
        ('experience', 'Experience'),
        ('education', 'Education'),
    )
    type = models.CharField(max_length=50, choices=types)
    duration = models.CharField(max_length=50, default="")
    title = models.CharField(max_length=50, default="")
    place_name = models.CharField(max_length=50, default="")
    description = models.TextField(max_length=400,
                                   default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .")

    @classmethod
    def get_experiense(cls):
        return cls.objects.filter(type="experience")

    @classmethod
    def get_education(cls):
        return cls.objects.filter(type="education")

    def __str__(self):
        """Return string representation of Experience"""
        return f"{self.title} at {self.place_name}"


class Skill(models.Model):
    title = models.CharField(max_length=50, blank=True, default="")
    description = models.TextField(max_length=400)
    picture = models.ImageField(blank=True, default="")


    def __str__(self):
        """Return string representation of Skills"""
        return self.title


class Portfolio(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=400)
    picture = models.ImageField()
    link = models.TextField(max_length=100)
    picture_small = models.FileField(blank=True, null=True)

    def __str__(self):
        """Return string representation of Skills"""
        return self.title


class Message(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    subject = models.CharField(max_length=50)
    content = models.TextField(max_length=400)

    def __str__(self):
        """Return string representation of Skills"""
        return f"{self.subject} from {self.name}"

    # def get_absolute_url(self):
    #     return reverse('core:contact')
