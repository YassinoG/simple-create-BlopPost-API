# api/migrations/0002_blogpost_author.py
from django.db import migrations

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        # Remove the field definition if it's no longer needed
        # migrations.AddField(
        #     model_name='blogpost',
        #     name='author',
        #     field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='blog_posts', to='user_api.user'),
        # ),
    ]
