var numDecodings = function(s) {
    let n = s.length;
    if (n === 0 || s[0] === '0') return 0;

    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;

    for (let i = 2; i <= n; i++) {
        let oneDigit = s.substring(i - 1, i);
        if (oneDigit !== '0') {
            dp[i] += dp[i - 1];
        }

        let twoDigits = s.substring(i - 2, i);
        if (twoDigits >= '10' && twoDigits <= '26') {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};
