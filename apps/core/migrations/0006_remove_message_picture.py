# Generated by Django 3.1.7 on 2021-09-27 15:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20210927_1903'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='picture',
        ),
    ]
