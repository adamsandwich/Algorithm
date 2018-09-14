/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    return findPeak(A, 0, A.length - 1);
};
/**
 * 
 * @param {number[]} nums 
 * @param {number} start 
 * @param {number} end 
 */
var findPeak = function (nums, start, end) {
    if (end - start < 2) {
        return -1;
    } else {
        let mid = Math.floor((start + end) / 2);
        if (nums[start] < nums[mid] && nums[mid] > nums[end]) {
            if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            if (nums[mid + 1] > nums[mid]) {
                return findPeak(nums, mid, end)
            } else {
                return findPeak(nums, start, mid)
            }
        }
        if (nums[start] <= nums[mid] && nums[mid] <= nums[end]) { //up
            return findPeak(nums, mid, end);
        }
        if (nums[start] >= nums[mid] && nums[mid] >= nums[end]) { //down
            return findPeak(nums, start, mid);
        }
    }
}