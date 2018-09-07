/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                res = Math.max(clearIsland(grid, i, j), res);
            }
        }
    }
    return res;
};
/**
 * 
 * @param {number[][]} grid 
 * @param {number} i 
 * @param {number} j 
 */
var clearIsland = function (grid, i, j) {
    let res = 0;
    if (grid[i][j] === 1) {
        grid[i][j] = 0;
        res++;
        if (i + 1 < grid.length) {
            res += clearIsland(grid, i + 1, j);
        }
        if (j + 1 < grid[0].length) {
            res += clearIsland(grid, i, j + 1);
        }
        if (i - 1 >= 0) {
            res += clearIsland(grid, i - 1, j);
        }
        if (j - 1 >= 0) {
            res += clearIsland(grid, i, j - 1);
        }
    }
    return res;
}