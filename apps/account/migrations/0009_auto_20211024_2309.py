# Generated by Django 3.2.7 on 2021-10-24 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0008_alter_userprofile_contact_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='address',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='contact_message',
            field=models.TextField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .', max_length=500),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='contact_title',
            field=models.TextField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .', max_length=500),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='thanks_message',
            field=models.TextField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .', max_length=500),
        ),
    ]
