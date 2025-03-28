def last2(str):
  cnt = 0
 
  for i in range(1, len(str) - 1):
    if str[i - 1 : i + 1] == str[-2:]:
      cnt += 1
 
  return cnt