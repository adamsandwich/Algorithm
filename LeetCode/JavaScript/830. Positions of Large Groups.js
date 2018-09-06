/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let currentChar = '';
    let dict = {};
    let res = [];
    for (let i = 0, j = 0; i < S.length; i++) {
        if (currentChar === S.charAt(i)) {
            if (j in dict === false) {
                dict[j] = {
                    start: i - 1,
                    end: i,
                    isLarge: false
                };
            }
            dict[j].end = Math.max(dict[j].end, i);
            if (dict[j].end - dict[j].start >= 2) {
                dict[j].isLarge = true;
            }
        } else {
            currentChar = S.charAt(i);
            j++;
        }
    }
    for (let key in dict) {
        if (dict[key].isLarge === true) {
            res.push([dict[key].start, dict[key].end]);
        }
    }
    return res;
};

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var regexp = /(\w)\1{2,}/g;
    var match;
    var res = [];
    while(match = regexp.exec(S)){
        res.push([match.index, match.index + match[0].length - 1]);
    }
    return res;
};