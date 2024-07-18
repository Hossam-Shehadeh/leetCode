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
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let numSet = new Set(nums);
    let maxLength = 0;
    
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            maxLength = max(maxLength, currentLength);
        }
    }
    
    return maxLength;
};