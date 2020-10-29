from rest_framework import serializers 
from all4cats.models import Region, Price, University, House
 
 
class regionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ('zipcode',
                  'state',
                  'city')


class priceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('date',
                  'value',
                  'zipcode')


class univeristySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ('university_name',
                  'zipcode')


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = ('house_id',
                  'price',
                  'company',
                  'address',
                  'number_of_rooms',
                  'floor_plan')
