function maxDifference(s: string): number {
    const map = new Map()
    let a1=0;
    let a2=Infinity;

    for(let ch of s){
        map.set(ch, (map.get(ch)?? 0)+1);
    }

    for(let val of map.values()){
        if(val % 2 === 1 && val > a1)
        {
            a1=val;
        }
        else if(val %2 ===0 && val < a2 )
        {
            a2=val;
        }
    }
    return a1 - a2;
    
};