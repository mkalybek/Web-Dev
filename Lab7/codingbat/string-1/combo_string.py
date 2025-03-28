def combo_string(a, b):
  max = a
  min = b
  if len(min) > len(max):
    max = b
    min = a
  return min + max + min