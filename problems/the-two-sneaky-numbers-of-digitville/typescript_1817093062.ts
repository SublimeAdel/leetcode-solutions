function getSneakyNumbers(nums: number[]): number[] {
    const unique = new Set<number>();
    const sol : number[] = [];

    for (let value of nums) {
        if(sol.length === 2){
            break;
        }
        if(unique.has(value)){
            sol.push(value)
        }
        else {
            unique.add(value)
        }
    }

    return sol;

};