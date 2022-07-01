from django.urls import path, include
from appTwo import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('', views.help, name='help'),
]