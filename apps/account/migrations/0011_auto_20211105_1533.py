# Generated by Django 3.2.7 on 2021-11-05 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0010_auto_20211105_1529'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='picture',
            field=models.ImageField(blank=True, default='settings.MEDIA_ROOT/pp.jpg', null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='picture_small',
            field=models.ImageField(blank=True, default='settings.MEDIA_ROOT/p.jpg', null=True, upload_to=''),
        ),
    ]