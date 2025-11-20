/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    for(let num of nums){

        if(!map.has(num)){
            map.set(num, 1);
        }
        else if (map.get(num)+1 === 3)
        {
            map.delete(num);     
        }            
        else {
            map.set(num, map.get(num)+1);
        }
    }

    return [...map][0][0];
};