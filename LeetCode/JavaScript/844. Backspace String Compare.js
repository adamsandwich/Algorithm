/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let arrS = [],
        arrT = [];
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === "#") {
            arrS.pop();
        } else {
            arrS.push(S.charAt(i));
        }
    }
    for (let i = 0; i < T.length; i++) {
        if (T.charAt(i) === "#") {
            arrT.pop();
        } else {
            arrT.push(T.charAt(i));
        }
    }
    if (arrS.join('') === arrT.join('')) {
        return true;
    } else {
        return false;
    }
};