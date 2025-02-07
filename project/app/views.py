from django.shortcuts import render
from django.http import HttpResponse
from .models import Track, Agent, Dealer

# Create your views here.

def index(request):
    tracks = Track.objects.all()
    context = {"tracks": tracks}
    return render(request, "apps/landing.html", context)

def records_view(request):
    tracks = Track.objects.all()
    targetInfo = Dealer.objects.all()
    context = {"tracks": tracks, "targetInfo" : targetInfo}
    return render(request, "apps/records.html", context)