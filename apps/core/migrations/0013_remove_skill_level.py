# Generated by Django 3.2.7 on 2021-11-05 12:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_skill_picture'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='level',
        ),
    ]
