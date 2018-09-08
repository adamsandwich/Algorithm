/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length === 0) return 0;
    let max = 1;
    let res = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] > 0) { //up
            max++;
        } else { //down | equal
            res = Math.max(max, res);
            max = 1;
        }
    }
    res = Math.max(max, res);
    return res;
};