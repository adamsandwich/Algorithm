/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length === 1) {
        return 0;
    }
    var maxIndex = function (i, j) {
        if (nums[i] > nums[j]) {
            return i;
        } else {
            return j;
        }
    }
    var minIndex = function (i, j) {
        if (nums[i] < nums[j]) {
            return i;
        } else {
            return j;
        }
    }
    let max1 = nums[0] >= nums[1] ? 0 : 1,
        max2 = nums[0] < nums[1] ? 0 : 1;
    if (nums.length > 2) {
        for (let i = 2; i < nums.length; i++) {
            max2 = maxIndex(max2, minIndex(max1, i));
            max1 = maxIndex(max1, i);
        }
    }
    return nums[max1] >= 2 * nums[max2] ? max1 : -1;
};