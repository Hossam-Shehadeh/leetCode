/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
    let anagramGroups = new Map();
    
    for (let str of strs) {
       
        let sortedStr = str.split('').sort().join('');
        
        if (!anagramGroups.has(sortedStr)) {
            anagramGroups.set(sortedStr, []);
        }
        anagramGroups.get(sortedStr).push(str);
    }

    return Array.from(anagramGroups.values());
};