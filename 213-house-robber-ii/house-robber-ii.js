var rob = function(nums) {
    const robLinear = (houses) => {
        let prev1 = 0, prev2 = 0;
        for (let num of houses) {
            let temp = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = temp;
        }
        return prev1;
    };

    let n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    let max1 = robLinear(nums.slice(1));

    let max2 = robLinear(nums.slice(0, n - 1));

    return Math.max(max1, max2);
};
