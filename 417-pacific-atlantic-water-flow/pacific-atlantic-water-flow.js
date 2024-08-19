var pacificAtlantic = function(heights) {
    if (!heights || heights.length === 0 || heights[0].length === 0) return [];

    const m = heights.length;
    const n = heights[0].length;
    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const dfs = (r, c, ocean) => {
        ocean[r][c] = true;
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                dfs(nr, nc, ocean);
            }
        }
    };

    for (let i = 0; i < m; i++) dfs(i, 0, pacific); 
    for (let j = 0; j < n; j++) dfs(0, j, pacific); 

    for (let i = 0; i < m; i++) dfs(i, n - 1, atlantic); 
    for (let j = 0; j < n; j++) dfs(m - 1, j, atlantic); 

    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};
