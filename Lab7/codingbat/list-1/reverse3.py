def reverse3(nums):
  j = len(nums) - 1
  for i in range(len(nums) // 2):
    nums[i], nums[j] = nums[j], nums[i]
 
  return nums