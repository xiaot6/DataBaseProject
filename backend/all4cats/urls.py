from django.urls import path
from all4cats import views


urlpatterns = [
    path('api/price', views.get_price_all),
    path('api/price/<str:d>/<str:z>', views.get_price_by_date_zipcode),
    path('api/price/<str:d>/<str:s>/<str:c>',
         views.get_price_by_date_state_city),
    path('api/stateAvg/<str:s>', views.get_state_avg_price),
    path('api/university/<str:d>', views.get_avg_price_by_university),
    path('api/predictCA/<str:d>/<str:d>', views.predictCA)
    # path('api/all4cats/published/', views.all4cats_list_published)
]
