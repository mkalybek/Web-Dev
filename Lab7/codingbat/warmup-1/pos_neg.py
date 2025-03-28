def pos_neg(a, b, negative):
  if negative:
    if a / abs(a) == -1 and b / abs(b) == -1:
      return True
    else:
      return False
 
  if a / abs(a) == -1 and b / abs(b) == 1:
    return True
 
  return a / abs(a) == 1 and b / abs(b) == -1