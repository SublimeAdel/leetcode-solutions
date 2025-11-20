function key(row: number, col: number): string {
  return `${row},${col}`;
}

function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    const guarded = new Set<string>();    
    const obstructions = new Set<string>();

    const isObstructed = (row: number, col:number): boolean=>{
        if(obstructions.has(key(row,col))){
            return true;
        }
        else{
            guarded.add(key(row,col));
            return false;
        }

    }
    // fill up obstructions set
    for(const [i,j] of guards){
        obstructions.add(key(i,j));
    }
    
    for(const [i,j] of walls){
        obstructions.add(key(i,j));
    }

    // for each guard
    for (const [i,j] of guards){
        // march north
        for(let x=i-1;x>=0;x--){
            if(isObstructed(x,j)){
                break;
            }
        }

        // march south
        for(let x=i+1;x<m;x++){
            if(isObstructed(x,j)){
                break;
            }

        }

        // march west
        for(let y=j-1;y>=0;y--){
            if(isObstructed(i,y)){
                break;
            }
        }

        // march east
        for(let y=j+1;y<n;y++){
            if(isObstructed(i,y)){
                break;
            }
        }
        
    }

    return m*n - guarded.size - obstructions.size;
};