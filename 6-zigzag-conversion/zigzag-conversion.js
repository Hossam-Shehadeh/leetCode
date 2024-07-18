/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1 || numRows>= s.length) return s;

    let rows=[];
    for(let i=0;i< numRows ; i++){
        rows[i]='';
    }

    let currentRow =0;
    let diriction =1;

    for(let i=0;i< s.length ; i++){
        rows[currentRow] += s[i];

        if(currentRow == 0){
            diriction =1
        }
        else if (currentRow == numRows-1){
            diriction =-1
        }

        currentRow +=diriction;
    }
    
    return rows.join('');
    
};