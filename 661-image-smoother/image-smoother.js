var imageSmoother = function(img) {
    const m = img.length;
    const n = img[0].length;
    const result = Array.from({ length: m }, () => Array(n).fill(0));

    const directions = [
        [0, 0], [0, 1], [0, -1],
        [1, 0], [1, 1], [1, -1],
        [-1, 0], [-1, 1], [-1, -1]
    ];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;

            for (let [dx, dy] of directions) {
                const newX = i + dx;
                const newY = j + dy;

                if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                    sum += img[newX][newY];
                    count++;
                }
            }

            result[i][j] = Math.floor(sum / count);
        }
    }

    return result;
};
