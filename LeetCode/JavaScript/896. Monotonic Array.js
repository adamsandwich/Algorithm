/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    if (A.length === 1) {
        return true;
    }
    let res = 0;
    if (A[1] - A[0] > 0) {
        res = 1;
    }
    if (A[1] - A[0] < 0) {
        res = -1;
    }
    for (let i = 1; i < A.length; i++) {
        let temp = res;
        if (A[i] - A[i - 1] > 0) {
            temp = 1;
        }
        if (A[i] - A[i - 1] < 0) {
            temp = -1;
        }
        if (temp !== res && res !== 0) return false;
        else res = temp;
    }
    return true;
};