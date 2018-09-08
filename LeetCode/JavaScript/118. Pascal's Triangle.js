/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [
            [1]
        ];
    }
    let res = [];
    res[0] = [1];
    res[1] = [1, 1];
    for (let i = 2; i < numRows; i++) {
        let temp = [1];
        for (let j = 1; j < i; j++) {
            temp[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        temp[i] = 1;
        res[i] = temp;
    }
    return res;
};