# Generated by Django 3.2.7 on 2021-09-23 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='type',
            field=models.CharField(choices=[('experience', 'Experience'), ('education', 'Education')], max_length=20),
        ),
    ]
