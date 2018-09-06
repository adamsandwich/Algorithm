/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let res = Number.MAX_SAFE_INTEGER;
    let dict = {};
    let maxCount = Number.MIN_SAFE_INTEGER;
    nums.forEach((value, index) => {
        if (value in dict === false) {
            dict[value] = {
                count: 0,
                start: Number.MAX_SAFE_INTEGER,
                end: Number.MIN_SAFE_INTEGER
            };
        }
        dict[value].count++;
        dict[value].start = Math.min(dict[value].start, index);
        dict[value].end = Math.max(dict[value].end, index);
        maxCount = Math.max(dict[value].count, maxCount);
    })
    for (var key in dict) {
        if (dict[key].count === maxCount) {
            res = Math.min(res, dict[key].end - dict[key].start);
        }
    }
    return res + 1;
};