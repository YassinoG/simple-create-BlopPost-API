
from django.urls import path ,include

urlpatterns = [
    #path('admin/', admin.site.urls), # kn ne5thou admin/ we in7otoha fil url toul bch it 3adina admin.site.urls
    #lena it sir el creation de chaque nv url
    path('', include('api.urls')), 
    path('account/', include('account.urls')),  # lena 3adina account.urls fil urls.py

]
