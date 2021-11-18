# Generated by Django 3.2.7 on 2021-09-29 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialNetwork',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('icon', models.ImageField(upload_to='')),
                ('link', models.URLField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, default='Mohamad R', max_length=50)),
                ('last_name', models.CharField(blank=True, default='Sabery', max_length=50)),
                ('description', models.CharField(blank=True, default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum finibus neque, gravida vestibulum lectus rutrum a. Aliquam ac nibh .', max_length=200)),
                ('birth_date', models.DateField()),
                ('title', models.CharField(blank=True, default='Mechanical Engineer', max_length=50)),
                ('address', models.CharField(blank=True, default='', max_length=50)),
                ('phone_number', models.CharField(blank=True, default='', max_length=50)),
                ('email', models.CharField(max_length=50, unique=True)),
                ('skype_id', models.CharField(blank=True, default='@sabery', max_length=50)),
                ('linkedin_id', models.CharField(blank=True, default='linkedin.com/sabery', max_length=50)),
                ('languages', models.CharField(blank=True, default='', max_length=50)),
                ('years_of_experience', models.CharField(blank=True, default='5', max_length=50)),
                ('cv', models.FileField(upload_to='')),
                ('picture', models.FileField(upload_to='')),
                ('thanks_message', models.TextField(max_length=500)),
                ('contact_title', models.CharField(max_length=500)),
                ('contact_message', models.TextField(max_length=500)),
                ('picture_small', models.FileField(upload_to='')),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
