from rest_framework import serializers 
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'content', 'published_date']# lzm na3mlou specification lil fields eli bch ii raja3hom el api eli houma lzm ii kounou deja mawjoudinn fil models.py
        