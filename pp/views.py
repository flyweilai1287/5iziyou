#coding=utf-8
from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext,loader
from django.http import Http404
def index(request):
    return render(request,u'index.html')

# Create your views here.
