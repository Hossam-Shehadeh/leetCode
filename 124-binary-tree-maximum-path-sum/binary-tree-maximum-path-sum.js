var maxPathSum = function(root) {
    let maxSum = -Infinity;

    const maxGain = (node) => {
        if (node === null) {
            return 0;
        }

        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);

        const currentMaxPath = node.val + leftGain + rightGain;

        maxSum = Math.max(maxSum, currentMaxPath);

        return node.val + Math.max(leftGain, rightGain);
    };

    maxGain(root);
    return maxSum;
};