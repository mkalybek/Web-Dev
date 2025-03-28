n = int(input())

for i in range(n):
    try:
        a, b = map(int, input().split())
        result = a / b
        print(round(result))
    except ZeroDivisionError as zde:
        print('Error Code: integer division or modulo by zero')
    except ValueError as ve:
        print('Error Code:', ve)