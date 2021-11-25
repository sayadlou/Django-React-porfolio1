from django.test import TestCase, Client

from ..models import *
from ...account.models import UserProfile


class ViewTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = UserProfile.objects.create_user("aa@bc.cc", "asQW123*asQW123*")

    def test_home_by_url(self):
        response = self.client.get('')
        self.assertEqual(response.status_code, 200)

    def test_home_by_name(self):
        response = self.client.get(reverse('core:home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/index.html')

    def test_about_by_url(self):
        response = self.client.get('/about')
        self.assertEqual(response.status_code, 200)

    def test_about_by_name(self):
        response = self.client.get(reverse('core:about'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/about.html')

    def test_portfolio_by_url(self):
        response = self.client.get('/portfolio')
        self.assertEqual(response.status_code, 200)

    def test_portfolio_by_name(self):
        response = self.client.get(reverse('core:portfolio'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/portfolio.html')

    def test_contact_by_url(self):
        response = self.client.get('/contact')
        self.assertEqual(response.status_code, 200)

    def test_contact_by_name(self):
        response = self.client.get(reverse('core:contact'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/contact.html')

    def setUp(self):
        self.client = Client(enforce_csrf_checks=False)

    def test_contact_post(self):
        url = reverse('core:contact')
        request = self.client.post(url, {
            'name': "comment",
            'email': "sayadlou@bsfsef.comm",
            'subject': "Super Important Test",
            'content': "This is really important.",
        }, follow=True)
        message = Message.objects.last()
        self.assertEqual(message.subject, "Super Important Test")

    def test_thanks_by_url(self):
        response = self.client.get('/thanks')
        self.assertEqual(response.status_code, 200)

    def test_thanks_by_name(self):
        response = self.client.get(reverse('core:thanks'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/thanks.html')
