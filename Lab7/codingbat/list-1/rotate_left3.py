def rotate_left3(nums):
  for i in range(len(nums) - 1):
    nums[i], nums[i + 1] = nums[i + 1], nums[i]
   
  return nums