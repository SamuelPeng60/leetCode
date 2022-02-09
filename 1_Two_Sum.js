/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let ans;
    let i, x;
    for(i=0; i<nums.length; i++) {
      for(x=i+1; x<nums.length; x++) {
        ans = nums[i] + nums[x]
        if(ans == target) {
          return [i,x]
        }
      }
    }
};