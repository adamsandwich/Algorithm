/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let maxNums = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    let minNums = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    for (let i = 0; i < nums.length; i++) {
        maxNums[2] = Math.max(maxNums[2], Math.min(maxNums[1], nums[i]));
        maxNums[1] = Math.max(maxNums[1], Math.min(maxNums[0], nums[i]));
        maxNums[0] = Math.max(maxNums[0], nums[i]);
        minNums[1] = Math.min(minNums[1], Math.max(minNums[0], nums[i]));
        minNums[0] = Math.min(minNums[0], nums[i]);
    }
    return Math.max(maxNums[0] * maxNums[1] * maxNums[2], maxNums[0] * minNums[0] * minNums[1]);
};