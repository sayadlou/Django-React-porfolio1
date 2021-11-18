from django.shortcuts import get_object_or_404
from django.urls import reverse
from django.views.generic import TemplateView, DetailView, ListView, FormView
from datetime import date
from django.contrib import messages

from django.views.generic.edit import CreateView

from .models import Experience, Skill, Portfolio, Message
from ..account.models import UserProfile
from ..blog.models import Post
from django.contrib.messages.views import SuccessMessageMixin


class Home(DetailView):
    template_name = 'core/index.html'

    def get_object(self, **kwargs):
        # obj = get_object_or_404(UserProfile, id=1)
        obj = UserProfile.objects.latest("id")
        return obj


class About(ListView):
    template_name = 'core/about.html'
    context_object_name = 'about'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        data = UserProfile.objects.latest("id")
        today = date.today()
        age = today.year - data.birth_date.year - (
                (today.month, today.day) < (data.birth_date.month, data.birth_date.day))
        context['age'] = age
        context['profile'] = data
        return context

    def get_queryset(self, **kwargs):
        queryset = {
            "skill": Skill.objects.all(),
            "experience": Experience.get_experiense(),
            "eduction": Experience.get_education(),
        }
        return queryset


class PortfolioView(ListView):
    template_name = 'core/portfolio.html'
    context_object_name = "portfolio"
    model = Portfolio
    paginate_by = 6


class Contact(CreateView):
    model = Message
    template_name = 'core/contact.html'
    fields = ['name', 'email', 'subject', 'content', ]
    success_url = "/thanks"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        data = UserProfile.objects.latest("id")
        context['profile'] = data
        return context


class Thanks(DetailView):
    template_name = 'core/thanks.html'

    def get_object(self, **kwargs):
        obj = UserProfile.objects.latest("id")
        return obj
