# Generated by Django 3.2.7 on 2021-09-23 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('Experience', 'experience'), ('Education', 'education')], max_length=20)),
                ('duration', models.CharField(blank=True, default='', max_length=50)),
                ('title', models.CharField(blank=True, default='', max_length=50)),
                ('place_name', models.CharField(blank=True, default='', max_length=50)),
                ('description', models.CharField(blank=True, default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=50)),
                ('level', models.FloatField(blank=True, default=1.0)),
            ],
        ),
    ]