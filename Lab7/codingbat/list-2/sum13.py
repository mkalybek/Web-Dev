def sum13(nums):
  sum = 0
  is_13 = False
 
  for i in range(len(nums)):
    if is_13:
      is_13 = False
      continue
   
    if nums[i] == 13:
      is_13 = True
      continue
   
    sum += nums[i]
 
  return sum