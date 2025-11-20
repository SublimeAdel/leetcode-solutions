function key(row: number, col: number): string {
  return `${row},${col}`;
}

function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    const grid = Array.from({ length: m }, () => Array(n).fill(0)); // 0=empty,1=obstructed
    const guarded = Array.from({ length: m }, () => Array(n).fill(false));

    // fill up obstructions
    for (const [i, j] of guards) grid[i][j] = 1;
    for (const [i, j] of walls) grid[i][j] = 1;

    for (const [i, j] of guards) {
    // march north
    for (let x = i - 1; x >= 0 && grid[x][j] === 0; x--) guarded[x][j] = true;
    // martch south
    for (let x = i + 1; x < m && grid[x][j] === 0; x++) guarded[x][j] = true;
    // march west
    for (let y = j - 1; y >= 0 && grid[i][y] === 0; y--) guarded[i][y] = true;
    // march east
    for (let y = j + 1; y < n && grid[i][y] === 0; y++) guarded[i][y] = true;
  }

  let unguarded = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0 && !guarded[i][j]) unguarded++;
    }
  }

  return unguarded;

};