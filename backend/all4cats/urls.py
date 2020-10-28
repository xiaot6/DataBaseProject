from django.urls import path 
from all4cats import views 
 
urlpatterns = [ 
    path('api/all4cats', views.all4cats_list),
    path('api/all4cats/<int:pk>/', views.all4cats_detail),
    path('api/all4cats/published/', views.all4cats_list_published)
]