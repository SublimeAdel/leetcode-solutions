const xSum = (array: number[], x: number) => {
    const map = new Map<number, number>();
    let sum = 0;

    // fill up occurences map
    for (let num of array){
        map.set(num, (map.get(num)?? 0)+1)
    }

    // sort occurences map descendingly, if values are equal sort with keys
    const sortedMap = new Map([...map.entries()].sort(([k1,v1],[k2,v2])=>{
        return v1===v2? k2-k1 : v2-v1 
    }))

    // calculate X sum for given array
    for (let [k,v] of [...sortedMap.entries()].slice(0,x)){
        sum+= k*v;
    }

    return sum;
}

function findXSum(nums: number[], k: number, x: number): number[] {
    const n = nums.length;
    const answer: number[] = []
    
    for(let i = 0; i< n-k+1; i++){
        answer.push(xSum(nums.slice(i, i+k), x));
    }
    
    return answer;
};