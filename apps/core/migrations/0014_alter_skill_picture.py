# Generated by Django 3.2.7 on 2021-11-05 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_remove_skill_level'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='picture',
            field=models.ImageField(blank=True, default='', upload_to=''),
        ),
    ]