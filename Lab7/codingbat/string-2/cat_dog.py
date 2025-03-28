def cat_dog(str):
  cat_cnt = 0
  dog_cnt = 0
 
  for i in range(len(str) - 2):
    if str[i : i + 3] == 'cat':
      cat_cnt += 1
    if str[i : i + 3] == 'dog':
      dog_cnt += 1
 
  return cat_cnt == dog_cnt