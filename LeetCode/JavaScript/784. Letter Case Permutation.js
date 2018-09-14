/**
 * 
 * @param {string} pre 
 * @param {string} S 
 * @param {string[]} res 
 */
var generate = function (pre, S, res) {
    if (S.length === 0) {
        res.push(pre);
    } else {
        let char = S.charAt(0);
        let restS = S.slice(1);
        if (/[0-9]/.test(char)) {
            generate(pre + char, restS, res);
            return;
        }
        generate(pre + char.toUpperCase(), restS, res);
        generate(pre + char.toLowerCase(), restS, res);
    }
}
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let res = [];
    generate("", S, res);
    return res;
};
letterCasePermutation("a1b2");