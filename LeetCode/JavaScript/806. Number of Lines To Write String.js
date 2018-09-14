/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    let res = 1,
        lineWidth = 0;
    for (let i = 0; i < S.length; i++) {
        let index = S.charCodeAt(i) - "a".charCodeAt(0);
        lineWidth += widths[index];
        if (lineWidth > 100) {
            lineWidth = widths[index];
            res++;
        }
    }
    return [res, lineWidth];
};