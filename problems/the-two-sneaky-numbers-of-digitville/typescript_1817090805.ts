function getSneakyNumbers(nums: number[]): number[] {
    const unique = new Set<number>();
    const sol : number[] = [];

    for (let value of nums) {
        if(unique.has(value)){
            sol.push(value)
        }
        else {
            unique.add(value)
        }
    }

    return sol;

};