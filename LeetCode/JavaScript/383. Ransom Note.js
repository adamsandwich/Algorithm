/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let alphabet = new Array(26).fill(0);
    for (let i = 0; i < ransomNote.length; i++) {
        alphabet[ransomNote.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < magazine.length; i++) {
        if (alphabet[magazine.charCodeAt(i) - 97] !== 0) {
            alphabet[magazine.charCodeAt(i) - 97]--;
        }
    }
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] > 0) return false;
    }
    return true;
};