def left2(str):
  if len(str) <= 2:
    return str
  rotated = str[2:] + str[:2]
  return rotated