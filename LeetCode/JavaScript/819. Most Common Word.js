/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.replace(/[!?',;.]\s/g, ' ').replace(/[!?',;.]$/, '');
    let arr = paragraph.split(' ');
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].toLowerCase();
        if (banned.indexOf(key) !== -1) {
            continue;
        }
        if (map.has(key)) {
            let value = map.get(key) + 1;
            map.set(key, value);
        } else {
            map.set(key, 1);
        }
    }
    let res = "",
        max = 0;
    map.forEach(function (value, key) {
        if (value > max) {
            res = key;
            max = value;
        }
    })
    return res;
};