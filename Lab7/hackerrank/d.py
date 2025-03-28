import calendar

s = input().split()

result = calendar.weekday(int(s[2]), int(s[0]), int(s[1]))

print(result.name)