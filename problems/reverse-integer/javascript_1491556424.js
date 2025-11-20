/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversed = 0;
    let original = x;
    while (original) {
        reversed = reversed * 10 + (original % 10);
        original = x <0? Math.ceil(original/10) : Math.floor(original / 10);
    }
    if (reversed > ((2**31) - 1) || reversed < -(2**31))
    {
        return 0;        
    }
    return reversed;
};