/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let value = s.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        value = value * Math.pow(26, s.length - 1 - i);
        res += value;
    }
    return res;
};