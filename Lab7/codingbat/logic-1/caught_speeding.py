def caught_speeding(speed, is_birthday):
  if not is_birthday:
    if speed <= 60:
      return 0
    elif speed > 60 and speed <= 80:
      return 1
    else:
      return 2
  else:
    if speed <= 65:
      return 0
    elif speed > 66 and speed <= 85:
      return 1
    else:
      return 2