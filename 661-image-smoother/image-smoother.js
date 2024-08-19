var imageSmoother = function(img) {
    const m = img.length;
    const n = img[0].length;
    
    const flatten = (matrix) => {
        const arr = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        }
        return arr;
    };
    
    const get = (i, j) => {
        if (i >= 0 && i < m && j >= 0 && j < n) {
            return flattened[i * n + j];
        }
        return 0;
    };
    
    const flattened = flatten(img);
    const result = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;
            
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    const ni = i + x;
                    const nj = j + y;
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                        sum += get(ni, nj);
                        count++;
                    }
                }
            }
            
            result[i][j] = Math.floor(sum / count);
        }
    }
    
    return result;
};
