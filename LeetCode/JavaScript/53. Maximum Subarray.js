/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let dp = [],
        res = nums[0];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + Math.max(dp[i - 1], 0);
        res = Math.max(res, dp[i]);
    }
    return res;
};