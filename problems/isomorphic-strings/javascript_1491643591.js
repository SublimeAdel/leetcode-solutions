/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        let char1 = s[i];
        let char2 = t[i];
        // mapping each character to a unique number (first index)
        // paper -> 01023   title -> 01023  egg -> 011
        if (s.indexOf(char1) !== t.indexOf(char2)) {
            return false;
        }

    }
    return true;
}