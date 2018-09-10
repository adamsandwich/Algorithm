/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    let res = [1, 1];
    if (rowIndex === 1) {
        return res;
    }
    let temp;
    for (let i = 2; i <= rowIndex; i++) {
        res[i] = 1;
        for (let j = i - 1; j > 0; j--) {
            res[j] = res[j] + res[j - 1];
        }

    }
    return res;
};