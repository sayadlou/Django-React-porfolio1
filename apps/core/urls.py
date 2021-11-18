from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from .views import Home, About, PortfolioView, Contact, Thanks

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('about', About.as_view(), name='about'),
    path('portfolio', PortfolioView.as_view(), name='portfolio'),
    path('contact', Contact.as_view(), name='contact'),
    path('thanks', Thanks.as_view(), name='thanks'),
]
