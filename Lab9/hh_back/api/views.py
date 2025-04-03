from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    data = [ 
        {
            "id": company.id,
            "name": company.name,
            "description": company.description,
            "city": company.city,
            "address": company.address
        }
        for company in companies
    ]
    return JsonResponse(data, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)
    
    data = {
        "id": company.id,
        "name": company.name,
        "description": company.description,
        "city": company.city,
        "address": company.address
    }
    return JsonResponse(data)


def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)
    
    vacancies = company.vacancies.all()
    data = [
        {
            "id": vacancy.id,
            "name": vacancy.name,
            "description": vacancy.description,
            "salary": vacancy.salary,
            "company": vacancy.company.id
        }
        for vacancy in vacancies
    ]
    return JsonResponse(data, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = [
        {
            "id": vacancy.id,
            "name": vacancy.name,
            "description": vacancy.description,
            "salary": vacancy.salary,
            "company": vacancy.company.id
        }
        for vacancy in vacancies
    ]
    return JsonResponse(data, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found"}, status=404)

    data = {
        "id": vacancy.id,
        "name": vacancy.name,
        "description": vacancy.description,
        "salary": vacancy.salary,
        "company": vacancy.company.id
    }
    return JsonResponse(data)


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [
        {
            "id": vacancy.id,
            "name": vacancy.name,
            "description": vacancy.description,
            "salary": vacancy.salary,
            "company": vacancy.company.id
        }
        for vacancy in vacancies
    ]
    return JsonResponse(data, safe=False)
