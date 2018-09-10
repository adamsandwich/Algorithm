/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let plus = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + plus;
        plus = Math.floor(digits[i] / 10);
        if (digits[i] > 9) {
            digits[i] = 0;
        }
    }
    if (plus === 1) digits.unshift(1);
    return digits;
};