/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let sSum = 0,
        tSum = 0;
    for (let i = 0; i < s.length; i++) {
        sSum += s[i].charCodeAt();
        tSum += t[i].charCodeAt();
    }
    tSum += t[t.length - 1].charCodeAt();
    return String.fromCharCode(tSum - sSum);
};