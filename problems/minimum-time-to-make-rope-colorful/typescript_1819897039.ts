function minCost(colors: string, neededTime: number[]): number {
    let totalTime = 0;
    let subTotal = 0;
    let currentMax = 0;
    for (let char=0; char<colors.length ; char++){
        subTotal += neededTime[char];
        if(currentMax < neededTime[char]){
            currentMax = neededTime[char];
        }
        if(char=== colors.length-1 || colors[char]!==colors[char+1]){
            totalTime += subTotal - currentMax;
            currentMax = 0;
            subTotal = 0;
        }
    }

    return totalTime;
};