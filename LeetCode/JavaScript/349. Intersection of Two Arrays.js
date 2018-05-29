/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let res = [];
    let set = new Set();
    nums1.forEach((item) => set.add(item));
    nums2.forEach((item) => {
        if (set.has(item)) {
            res.push(item);
            set.delete(item);
        }
    })
    return res;
};