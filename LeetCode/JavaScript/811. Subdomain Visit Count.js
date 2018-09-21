/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let map = new Map();
    for (let i = 0; i < cpdomains.length; i++) {
        let count = parseInt(cpdomains[i].split(' ')[0]),
            domain = cpdomains[i].split(' ')[1],
            subDomains = domain.split('.');
        let subDomain = "";
        for (let j = subDomains.length - 1; j >= 0; j--) {
            if (subDomain === "") {
                subDomain = subDomains[j];
            } else {
                subDomain = subDomains[j] + '.' + subDomain;
            }
            if (map.has(subDomain)) {
                map.set(subDomain, map.get(subDomain) + count);
            } else {
                map.set(subDomain, count);
            }
        }
    }
    let res = [];
    map.forEach((value, key) => {
        res.push(value + " " + key);
    })
    return res;
};