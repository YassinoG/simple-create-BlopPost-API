from django.urls import path
from .views import RegisterUser, LoginUser

urlpatterns = [
    path('login/', LoginUser.as_view(), name='login'),  # Custom login logic
    path('register/', RegisterUser.as_view(), name='register'),  # Registration
]
