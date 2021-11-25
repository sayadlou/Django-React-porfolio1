from django.test import TestCase
from ..models import *


class AuthorModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Experience.objects.create(
            type="experience",
            title="Expert eng.",
            place_name="google",
        )
        Experience.objects.create(
            type="education",
            title="mech eng.",
            place_name="sharif",
        )

    def test_duration_max_length(self):
        experience = Experience.objects.get(id=1)
        max_length = experience._meta.get_field('duration').max_length
        self.assertEqual(max_length, 50)

    def test_title_max_length(self):
        experience = Experience.objects.get(id=1)
        max_length = experience._meta.get_field('title').max_length
        self.assertEqual(max_length, 50)

    def test_place_name_max_length(self):
        experience = Experience.objects.get(id=1)
        max_length = experience._meta.get_field('place_name').max_length
        self.assertEqual(max_length, 50)

    def test_description_max_length(self):
        experience = Experience.objects.get(id=1)
        max_length = experience._meta.get_field('description').max_length
        self.assertEqual(max_length, 400)

    def test_object_name_is_last_name_comma_first_name(self):
        experience = Experience.objects.get(id=1)
        expected_object_name = f"{experience.title} at {experience.place_name}"
        self.assertEqual(str(experience), expected_object_name)

    def test_static_methods(self):
        experience_count = Experience.get_experiense().count()
        education_count = Experience.get_education().count()
        self.assertEqual(experience_count, 1)
        self.assertEqual(education_count, 1)
