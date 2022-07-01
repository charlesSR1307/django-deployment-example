from django.shortcuts import render
from django.http import HttpResponse
from matplotlib.style import context
from django.views.generic import TemplateView

# Create your views here.

#def index(request):
    #return HttpResponse("<em>My Second Project<em>")

class HomePageView(TemplateView):
    template_name="appTwo/index.html"

def help(request):
    helpdict = {'help_insert': 'HELP PAGE'}
    return render(request, 'appTwo/help.html', context=help)