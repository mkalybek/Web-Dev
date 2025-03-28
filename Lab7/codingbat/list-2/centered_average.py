def centered_average(nums):
  sum = 0
  max = nums[0]
  min = nums[0]
 
  for num in nums:
    sum += num
   
    if num > max:
      max = num
   
    if num < min:
      min = num
 
  return (sum - max - min) / (len(nums) - 2)