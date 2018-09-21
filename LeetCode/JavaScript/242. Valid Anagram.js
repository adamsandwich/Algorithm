/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charCodeAt(i))) {
            let mapValue = map.get(s.charCodeAt(i)) + 1;
            map.set(s.charCodeAt(i), mapValue);
        } else {
            map.set(s.charCodeAt(i), 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        let value = t.charCodeAt(i);
        if (map.has(value)) {
            let mapValue = map.get(value) - 1;
            if (map.get(value) === 1) {
                map.delete(value);
            } else {
                map.set(value, mapValue);
            }
        } else {
            return false;
        }
    }
    if (map.size > 0) {
        return false;
    }
    return true;
};