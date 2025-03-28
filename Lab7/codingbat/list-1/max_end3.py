def max_end3(nums):
  max = nums[0]
 
  if nums[-1] > max:
    max = nums[-1]
 
  nums = [max] * len(nums)
 
  return nums