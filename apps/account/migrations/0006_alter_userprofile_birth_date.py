# Generated by Django 3.2.7 on 2021-10-21 09:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_auto_20211010_0031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='birth_date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
