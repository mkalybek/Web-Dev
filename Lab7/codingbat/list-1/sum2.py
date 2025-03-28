def sum2(nums):
  sum = 0
 
  for i in range(len(nums)):
    sum += nums[i]
   
    if i == 1:
      break
 
  return sum