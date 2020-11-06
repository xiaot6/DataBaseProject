from django.urls import path 
from all4cats import views


urlpatterns = [ 
    path('api/price', views.get_price_all),
    path('api/price/<str:d>/<str:z>', views.get_price_by_date_zipcode),
    path('api/price/<str:d>/<str:s>/<str:c>', views.get_price_by_date_state_city)
    # path('api/all4cats/published/', views.all4cats_list_published)
]