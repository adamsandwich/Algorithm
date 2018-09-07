/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    let sumA = 0,
        sumB = 0,
        difference = 0;
    let set = new Set();
    A.forEach((value) => {
        sumA += value;
    });
    B.forEach((value) => {
        sumB += value;
        set.add(value);
    });
    difference = (sumB - sumA) / 2;
    for (let i = 0; i < A.length; i++) {
        let temp = A[i] + difference;
        if (set.has(temp)) {
            return [A[i], temp];
        }

    }
    return [];
};