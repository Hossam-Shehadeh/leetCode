/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

function max(arr){
    let maxNum=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>maxNum)
        {
            maxNum=arr[i];
        }
    }
    return maxNum;
}
var kidsWithCandies = function(candies, extraCandies) {
    let result =[];
    let maxNum=max(candies);

    for(let i=0;i<candies.length;i++)
    {
        candies[i]=candies[i]+extraCandies;
        if(candies[i]>=maxNum)
        {
            result[i]=true;
        }
        else{
            result[i]=false;
        }
    }
    
     return result;
};