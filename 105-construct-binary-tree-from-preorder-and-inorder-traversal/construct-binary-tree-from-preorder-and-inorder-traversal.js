var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    let rootVal = preorder.shift();
    let root = new TreeNode(rootVal);

    let rootIndex = inorder.indexOf(rootVal);

    root.left = buildTree(preorder, inorder.slice(0, rootIndex));
    root.right = buildTree(preorder, inorder.slice(rootIndex + 1));

    return root;
};