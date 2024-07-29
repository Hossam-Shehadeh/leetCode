var maxPathSum = function(root) {
    let maxSum = root.val; 

    function helper(node) {
        if (!node) return 0;

        let left = Math.max(helper(node.left), 0);
        let right = Math.max(helper(node.right), 0);

        let currentMax = node.val + left + right;
        maxSum = Math.max(maxSum, currentMax);

        return node.val + Math.max(left, right);
    }

    helper(root);
    return maxSum;
};