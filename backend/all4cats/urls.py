from django.conf.urls import url 
from all4cats import views 
 
urlpatterns = [ 
    url(r'^api/all4cats$', views.all4cats_list),
    url(r'^api/all4cats/(?P<pk>[0-9]+)$', views.all4cats_detail),
    url(r'^api/all4cats/published$', views.all4cats_list_published)
]