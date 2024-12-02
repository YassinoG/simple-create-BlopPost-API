from django.urls import path
from . import views

urlpatterns = [
    #any time that we go to blogposts/ we will be transfered to views.BlogPostListCreate.as_view()
    path('blogposts/', views.BlogPostListCreate.as_view(), name='blogpost-view-create') ,
    path('blogposts/<int:pk>', views.BlogPostRetrieveUpdateDestroy().as_view(),  name='blogpost-retrieve-update'
        )
]
