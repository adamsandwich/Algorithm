/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (nums.length === 0 || nums.length === 1) return -1;
    let res, sumLeft = [nums[0]],
        sum = 0;
    for (let i = 1; i < nums.length; i++) {
        sumLeft[i] = sumLeft[i - 1] + nums[i];
        sum += nums[i - 1];
    }
    sum += nums[nums.length - 1];
    if (sum - nums[0] === 0) return 0;
    for (let i = 1; i < sumLeft.length; i++) {
        if (sum - nums[i] - sumLeft[i - 1] === sumLeft[i - 1]) {
            return i;
        }
    }
    return -1;
};