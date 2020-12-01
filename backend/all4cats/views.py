from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from all4cats.models import All4Cats
from all4cats.serializers import All4CatsSerializer
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET', 'POST', 'DELETE'])
def get_price_all(request):
    if request.method == 'GET':
        all4cats = All4Cats.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            all4cats = all4cats.filter(title__icontains=title)

        all4cats_serializer = All4CatsSerializer(all4cats, many=True)
        return JsonResponse(all4cats_serializer.data, safe=False)

    elif request.method == 'POST':
        all4cats_data = JSONParser().parse(request)
        all4cats_serializer = All4CatsSerializer(data=all4cats_data)
        if all4cats_serializer.is_valid():
            all4cats_serializer.save()
            return JsonResponse(all4cats_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(tall4cats_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = All4Cats.objects.all().delete()
        return JsonResponse({'message': '{} All4Cats were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def all4cats_detail(request, pk):
    try:
        all4cats = All4Cats.objects.get(pk=pk)
    except All4Cats.DoesNotExist:
        return JsonResponse({'message': 'The all4cats does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        all4cats_serializer = All4CatsSerializer(all4cats)
        return JsonResponse(all4cats_serializer.data)

    elif request.method == 'PUT':
        all4cats_data = JSONParser().parse(request)
        all4cats_serializer = All4CatsSerializer(all4cats, data=all4cats_data)
        if all4cats_serializer.is_valid():
            all4cats_serializer.save()
            return JsonResponse(all4cats_serializer.data)
        return JsonResponse(all4cats_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        all4cats.delete()
        return JsonResponse({'message': 'All4Cats was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def all4cats_list_published(request):
    all4cats = All4Cats.objects.filter(published=True)

    if request.method == 'GET':
        all4cats_serializer = All4CatsSerializer(all4cats, many=True)
        return JsonResponse(all4cats_serializer.data, safe=False)


@api_view(['GET'])
def get_avg_price_by_university(request, d):  # d is university_name
    # try:  # at zipcode level
    # prices = Price.objects.raw(
    #     'SELECT avg(p.value) FROM all4cats_university u JOIN all4cats_price p ON u.zipcode = z.zipcode GROUP BY u.zipcode HAVING u.university_name = %s', [d])
    # print(prices)
    # prices = Price.objects.raw(
    #     'SELECT avg(p.value) FROM all4cats_university u JOIN all4cats_price p ON u.state = p.state GROUP BY u.state HAVING u.university_name = %s', [d])

    cursor = connection.cursor()
    count = cursor.execute(
        'SELECT avg(p.value) FROM all4cats_university u JOIN all4cats_price p ON u.zipcode = p.zipcode WHERE u.university_name = %s GROUP BY u.zipcode', [d])
    if count == 0:
        count = cursor.execute(
            'SELECT avg(p.value) FROM all4cats_university u JOIN all4cats_price p ON u.city = p.city AND u.state = p.state WHERE u.university_name = %s GROUP BY u.city ', [d])
    if count == 0:
        count = cursor.execute(
            'SELECT avg(p.value) FROM all4cats_university u JOIN all4cats_price p ON u.state = p.state WHERE u.university_name = %sGROUP BY u.state ', [d])
    prices = cursor.fetchone()[0]

    return JsonResponse({'value': prices}, safe=False)

