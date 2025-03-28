def sum67(nums):
  is_found = False
  sum = 0
 
  for num in nums:
    if num == 6:
      is_found = True
      continue
    if is_found and num == 7:
      is_found = False
      continue
   
    if not is_found:
      sum += num
   
  return sum