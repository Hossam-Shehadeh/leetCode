/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToInt ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };

    let result =0;
    let prev = 0;

    for (let i=s.length -1 ; i >=0  ;i--)
    {
        let current = romanToInt[s[i]];

        if(current < prev){
            result -=current;
        }
        else{
            result +=current;
        }
        prev = current;
    }

    return result ;

    
};