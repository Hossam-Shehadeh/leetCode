var isSubtree = function(root, subRoot) {
    
    function isSameTree(tree1, tree2) {
        if (!tree1 && !tree2) return true;
        if (!tree1 || !tree2) return false;
        if (tree1.val !== tree2.val) return false;
        return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
    }

    
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};