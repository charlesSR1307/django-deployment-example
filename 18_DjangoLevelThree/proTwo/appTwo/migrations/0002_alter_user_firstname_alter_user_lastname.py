# Generated by Django 4.0.5 on 2022-06-28 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appTwo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='firstName',
            field=models.CharField(max_length=264),
        ),
        migrations.AlterField(
            model_name='user',
            name='lastName',
            field=models.CharField(max_length=264),
        ),
    ]
