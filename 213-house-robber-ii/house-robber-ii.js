function robLinear(houses) {
    let n = houses.length;
    if (n === 0) return 0;
    if (n === 1) return houses[0];
    let dp = new Array(n).fill(0);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
    }
    return dp[n - 1];
}

var rob = function(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    let maxExcludeFirst = robLinear(nums.slice(1));
    let maxExcludeLast = robLinear(nums.slice(0, n - 1));

    return Math.max(maxExcludeFirst, maxExcludeLast);
};
