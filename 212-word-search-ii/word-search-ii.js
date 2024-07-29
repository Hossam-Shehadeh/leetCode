class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

var findWords = function(board, words) {
    const result = [];
    const root = buildTrie(words);

    function buildTrie(words) {
        const root = new TrieNode();
        for (const word of words) {
            let node = root;
            for (const char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.word = word;
        }
        return root;
    }

    function dfs(board, node, i, j) {
        if (node.word) {
            result.push(node.word);
            node.word = null; 
        }

        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
        const char = board[i][j];
        if (!node.children[char]) return;

        board[i][j] = '#';
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (const [dx, dy] of directions) {
            dfs(board, node.children[char], i + dx, j + dy);
        }
        board[i][j] = char; 
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, root, i, j);
        }
    }

    return result;
};