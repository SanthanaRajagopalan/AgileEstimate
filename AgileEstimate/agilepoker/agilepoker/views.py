from django.http import HttpResponse
from django.shortcuts import render_to_response


def hello(request):
    """A test view to assure django is responsing."""
    return HttpResponse("Hello from django")

def index(request):
    return render_to_response('home/index.html')