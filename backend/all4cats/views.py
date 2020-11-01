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
            price_serializer.save()
            return JsonResponse(price_serializer.data, 
                                status=status.HTTP_201_CREATED) 
        return JsonResponse(price_serializer.errors, 
                            status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Price.objects.raw('SELECT * FROM all4cats_price').delete()
        return JsonResponse({'message': '{} deleted!'.format(count[0])}, 
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
 
    elif request.method == 'PUT': 
        prices = Price.objects.get(zipcode=z, date=d) 
        prices_data = JSONParser().parse(request) 
        prices_serializer = PriceSerializer(prices, data=prices_data) 
        if prices_serializer.is_valid(): 
            prices_serializer.save() 
            return JsonResponse(prices_serializer.data) 
        return JsonResponse(prices_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        prices.delete() 
        return JsonResponse({'message': 'Prices were deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)







# # Create your views here.
# @api_view(['GET', 'POST', 'DELETE'])
# def all4cats_list(request):
#     # GET list of all4cats, POST a new all4cats, DELETE all all4cats
#     if request.method == 'GET':
#         all4cats = All4Cats.objects.all()
        
#         title = request.GET.get('title', None)
#         if title is not None:
#             all4cats = all4cats.filter(title__icontains=title)
        
#         all4cats_serializer = All4CatsSerializer(all4cats, many=True)
#         return JsonResponse(all4cats_serializer.data, safe=False)

#     elif request.method == 'POST':
#         all4cats_data = JSONParser().parse(request)
#         all4cats_serializer = All4CatsSerializer(data=all4cats_data)
#         if all4cats_serializer.is_valid():
#             all4cats_serializer.save()
#             return JsonResponse(all4cats_serializer.data, status=status.HTTP_201_CREATED) 
#         return JsonResponse(tall4cats_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         count = All4Cats.objects.all().delete()
#         return JsonResponse({'message': '{} All4Cats were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
# @api_view(['GET', 'PUT', 'DELETE'])
# def all4cats_detail(request, pk):
#     try: 
#         all4cats = All4Cats.objects.get(pk=pk) 
#     except All4Cats.DoesNotExist: 
#         return JsonResponse({'message': 'The all4cats does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
#     if request.method == 'GET': 
#         all4cats_serializer = All4CatsSerializer(all4cats) 
#         return JsonResponse(all4cats_serializer.data) 
 
#     elif request.method == 'PUT': 
#         all4cats_data = JSONParser().parse(request) 
#         all4cats_serializer = All4CatsSerializer(all4cats, data=all4cats_data) 
#         if all4cats_serializer.is_valid(): 
#             all4cats_serializer.save() 
#             return JsonResponse(all4cats_serializer.data) 
#         return JsonResponse(all4cats_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
#     elif request.method == 'DELETE': 
#         all4cats.delete() 
#         return JsonResponse({'message': 'All4Cats was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
        
# @api_view(['GET'])
# def all4cats_list_published(request):
#     all4cats = All4Cats.objects.filter(published=True)
        
#     if request.method == 'GET': 
#         all4cats_serializer = All4CatsSerializer(all4cats, many=True)
#         return JsonResponse(all4cats_serializer.data, safe=False)