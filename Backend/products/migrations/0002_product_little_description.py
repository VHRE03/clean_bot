# Generated by Django 5.1.1 on 2024-09-19 00:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='little_description',
            field=models.CharField(default='Little description', max_length=250),
            preserve_default=False,
        ),
    ]
