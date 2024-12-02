from django.shortcuts import render
from rest_framework import generics , status
from rest_framework.response import Response
from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework.views import APIView

# Create your views here.

class BlogPostListCreate(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()  # injibou tous les blogposts el 3ana el kol
    serializer_class = BlogPostSerializer  # le serialiser va nous permetre de retourner el data

    def delete(self, request, *args, **kwargs):
        BlogPost.objects.all().delete()
        #204 No Content status code indicates that the request has succeeded, but no content is returned. This is commonly used when we have successfully deleted an item.
        return Response(status=status.HTTP_204_NO_CONTENT)  

# generics.ListCreateAPIView : it will allow you to access individual post delete and retrieve that specific blogpost
class BlogPostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):  
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    lookup_field = "pk"  # pk will be the id of our blogpost

# APIView : it will allow you to access all blogposts and create a new routes by using the methods implemented

class BlogPostList(APIView):
    def get(self, request, format=None):
        
        title = request.query_param.get("title","")
        if title:
            blogposts = BlogPost.objects.filter(title__icontains=title)
        else:
            blogposts = BlogPost.objects.all()

        serializer = BlogPostSerializer(blogposts, many=True)
        return Response(serializer.data , status=200 )# we can also put it status=status.HTTP_200_OK