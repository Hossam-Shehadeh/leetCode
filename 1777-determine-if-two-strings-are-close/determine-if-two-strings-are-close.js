/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false;
    
    let set1 = new Set(word1);
    let set2 = new Set(word2);
    if ([...set1].sort().join('') !== [...set2].sort().join('')) {
        return false;
    }

    let freq1 = new Map();
    let freq2 = new Map();
    
    for (let char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }
    
    for (let char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }
    
    let counts1 = [...freq1.values()].sort((a, b) => a - b).join(',');
    let counts2 = [...freq2.values()].sort((a, b) => a - b).join(',');
    
    return counts1 == counts2;
};