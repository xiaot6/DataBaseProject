from django.urls import path
from all4cats import views


urlpatterns = [
    path('api/price', views.get_price_all),
    path('api/price/<str:d>/<str:z>', views.get_price_by_date_zipcode),
    path('api/price/<str:d>/<str:s>/<str:c>',
         views.get_price_by_date_state_city),
    path('api/stateAvg/<str:s>', views.get_state_avg_price),
    path('api/university/<str:d>', views.get_avg_price_by_university),
    path('api/housebyprice/<str:s>', views.get_house_by_price),
    path('api/housebybedrooms/<str:s>', views.get_house_by_bedrooms),
    # Added just now
    path('api/housebyid/<str:s>', views.get_house_by_id),
    path('api/likebyid/<str:s>', views.get_likes_by_id),
    path('api/updatelikebyid/<str:s>', views.update_likes_by_id),
    # path('api/predictCA/<str:d>/<str:d>', views.predictCA)
]
