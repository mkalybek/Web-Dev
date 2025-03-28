def end_other(a, b):
  str = a
  str_2 = b
 
  if len(b) > len(a):
    str = b
    str_2 = a
 
  return str[-len(str_2):].lower() == str_2.lower()