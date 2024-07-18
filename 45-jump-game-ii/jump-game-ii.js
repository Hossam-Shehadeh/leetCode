/**
 * @param {number[]} nums
 * @return {number}
 */
 function max(num1,num2){
    if(num1>num2){
        return num1;
    }
    return num2;
 }
var jump = function(nums) {
    let steps = 0;
    let currentEnd = 0;
    let farthest = 0;
    
    for (let i = 0; i < nums.length- 1; i++) {
        farthest = max(farthest, i + nums[i]);
        
        if (i == currentEnd) {
            steps++;
            currentEnd = farthest;
            
            if (currentEnd >= nums.length - 1) {
                return steps;
            }
        }
    }
    
    return steps; 
};
