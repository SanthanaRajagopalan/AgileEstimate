from django.conf.urls import patterns, include, url
from django.contrib import admin


urlpatterns = patterns('',
    (r'^hello-django', 'agilepoker.views.hello'),
    (r'^$', 'agilepoker.views.index'),
)
