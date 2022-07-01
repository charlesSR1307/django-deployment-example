from django.shortcuts import render
from appTwo.models import User

# Create your views here.

#def index(request):
    #return HttpResponse("<em>My Second Project<em>")

def index(request):
    return render(request,"appTwo/index.html")

def users(request):
    users_list = User.objects.order_by('firstName')
    users_dict = {'users': users_list}
    return render(request,'appTwo/users.html',context=users_dict)
