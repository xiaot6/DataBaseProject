from django.db import models

# Create your models here.


class Region(models.Model):
    zipcode = models.CharField(
        max_length=60,
        blank=False,
        default='',
        primary_key=True)
    state = models.CharField(max_length=200, blank=False, default='')
    city = models.CharField(max_length=200, blank=False, default='')


class Price(models.Model):
    date = models.CharField(
        max_length=200,
        blank=False,
        default='',
        primary_key=True)
    value = models.FloatField()
    zipcode = models.ForeignKey(
        Region, on_delete=models.CASCADE)


class University(models.Model):
    university_name = models.CharField(
        max_length=200,
        blank=False,
        default='',
        primary_key=True)
    zipcode = models.CharField(
        max_length=60,
        blank=False,
        default='')


