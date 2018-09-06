/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let res = [];
    for (let i = 0; i < M.length; i++) {
        let tempRes = []
        for (let j = 0; j < M[0].length; j++) {
            let count = 1,
                sum = M[i][j];
            let temp = [];
            if (i - 1 >= 0) {
                sum += M[i - 1][j];
                count++;
                if (j - 1 >= 0) {
                    sum += M[i - 1][j - 1];
                    count++;
                }
                if (j + 1 < M[0].length) {
                    sum += M[i - 1][j + 1];
                    count++;
                }
            }
            if (i + 1 < M.length) {
                sum += M[i + 1][j];
                count++;
                if (j - 1 >= 0) {
                    sum += M[i + 1][j - 1];
                    count++;
                }
                if (j + 1 < M[0].length) {
                    sum += M[i + 1][j + 1];
                    count++;
                }
            }
            if (j - 1 >= 0) {
                sum += M[i][j - 1];
                count++;
            }
            if (j + 1 < M[0].length) {
                sum += M[i][j + 1];
                count++;
            }
            tempRes[j] = Math.floor(sum / count);
        }
        res[i] = tempRes;
    }
    return res;
};