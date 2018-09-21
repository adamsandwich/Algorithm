/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let current = 0;
    for (let i = 0; i < A.length; i++) {
        let value = A[i];
        if ([0, 2, 4, 6, 8].includes(value % 10)) {
            [A[current], A[i]] = [A[i], A[current]];
            current++;
        }
    }
    return A;
};