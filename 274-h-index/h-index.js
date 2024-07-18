/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const n = citations.length;
    let count = [];
    
    for (let i = 0; i <= n; i++) {
        count.push(0);
    }
    
    for (let i = 0; i < n ; i++) {
        let citation = citations[i];
        if (citation >= n) {
            count[n]++;
        } else {
            count[citation]++;
        }
    }
    
    
    let papers = 0;
    for (let h = n; h >= 0; h--) {
        papers += count[h];
        if (papers >= h) {
            return h;
        }
    }
    
    return 0; 
};