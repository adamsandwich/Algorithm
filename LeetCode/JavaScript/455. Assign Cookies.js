/**
 * @param {number[]} g 满足的大小
 * @param {number[]} s 提供的大小
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let res = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[res]) {
            res++;
        }
    }
    return res;
};