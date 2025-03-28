def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)
 
def round10(num):
  qaldyq = num % 10
 
  if qaldyq < 5:
    return num - qaldyq
  return num + 10 - qaldyq