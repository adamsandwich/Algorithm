/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map();
    nums.forEach(function (value, index) {
        map.set(value, index);
    });
    for (let i = 0; i < nums.length; i++) {
        let find = target - nums[i];
        if (map.has(find) && map.get(find) !== i) {
            return [i, map.get(find)];
        }
    }
};