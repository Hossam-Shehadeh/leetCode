/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let targetIndex = nums.length-1;

    for(let i = nums.length-2 ;i>=0 ;i--){
        if(i + nums[i] >= targetIndex ){
            targetIndex =i;
        }
    }
    return targetIndex==0;
};