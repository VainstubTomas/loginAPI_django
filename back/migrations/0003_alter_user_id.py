# Generated by Django 4.1 on 2024-07-04 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0002_user_localidad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
