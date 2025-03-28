def xyz_there(str):
  is_dot = False
  dot_cnt = 0
 
  for i in range(0, len(str) - 2):
    if is_dot:
      is_dot = False
    else:
      if str[i] == '.':
        is_dot = True
      else:
        if str[i : i + 3] == 'xyz':
          return True
 
  return False