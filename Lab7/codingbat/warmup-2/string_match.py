def string_match(a, b):
  cnt = 0
 
  for i in range(1, min(len(a), len(b))):
    if a[i - 1 : i + 1] == b[i - 1 : i + 1]:
      cnt += 1
 
  return cnt