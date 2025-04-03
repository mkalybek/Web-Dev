from django.test import TestCase
from models import Product

# Create your tests here.
def get_products_list():
    products = Product.objects.all()
    products_list = [p.to_json() for p in products]
    return JsonResponse(products_list, safe=False)