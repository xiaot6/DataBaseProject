from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
 
from all4cats.models import Price, University, House
from all4cats.serializers import PriceSerializer
from all4cats.serializers import UniveristySerializer
from all4cats.serializers import HouseSerializer
from django.db import connection

from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def get_price_all(request):
    if request.method == 'GET':
        price = Price.objects.raw('SELECT * FROM all4cats_price')
        price_serializer = PriceSerializer(price, many=True)
        return JsonResponse(price_serializer.data, safe=False)

    elif request.method == 'POST':
        price_serializer = PriceSerializer(data=request.data)
        if price_serializer.is_valid():
            price_obj = price_serializer.initial_data
            date = price_obj['date']
            value = price_obj['value']
            zipcode = price_obj['zipcode']
            with connection.cursor() as cursor:
                # need to change hardcoded part here to make it work
                count = cursor.execute("INSERT INTO all4cats_price(date, value, zipcode, city, state) VALUES(%s,%s,%s,%s,%s)", [date, value, zipcode, "CITY", "STATE"])
            return JsonResponse({'message': 'successfully inserted!'}, 
                                status=status.HTTP_201_CREATED) 
        return JsonResponse(price_serializer.errors, 
                            status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        with connection.cursor() as cursor:
            count = cursor.execute("DELETE FROM all4cats_price")
        return JsonResponse({'message': '{} deleted!'.format(count)}, 
                            status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def get_price_selected(request, d, z):
    try: 
        prices = Price.objects.raw('SELECT * FROM all4cats_price WHERE date = %s AND zipcode = %s', [d, z])

    except Price.DoesNotExist: 
        return JsonResponse({'message': 'The prices does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        prices_serializer = PriceSerializer(prices, many=True) 
        return JsonResponse(prices_serializer.data, safe=False) 
 
    # TODO: to be modified into SQL queries
    elif request.method == 'PUT': 
        prices = Price.objects.raw('SELECT * FROM all4cats_price WHERE date = %s AND zipcode = %s', [d, z])[0]
        
        prices_data = JSONParser().parse(request) 
        prices_serializer = PriceSerializer(prices, data=prices_data)

        if prices_serializer.is_valid(): 
            prices_serializer.save()
            temp_value = prices_data['value']
            with connection.cursor() as cursor:
                cursor.execute("UPDATE all4cats_price SET value = %s WHERE date = %s AND zipcode = %s", [temp_value, d, z])
            return JsonResponse(prices_serializer.data) 

        return JsonResponse(prices_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        with connection.cursor() as cursor:
            count = cursor.execute("DELETE FROM all4cats_price WHERE date = %s AND zipcode = %s", [d, z])
        return JsonResponse({'message': 'Prices were deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
