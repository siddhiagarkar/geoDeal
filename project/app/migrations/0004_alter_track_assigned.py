# Generated by Django 5.1.5 on 2025-01-31 15:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_remove_track_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='track',
            name='assigned',
            field=models.DateTimeField(default=datetime.datetime(2025, 1, 31, 20, 46, 59, 279299)),
        ),
    ]
