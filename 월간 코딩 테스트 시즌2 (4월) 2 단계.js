function compare(s) {
    let small = 0;
    let mid = 0;
    let big = 0;
    
    for(let i = 0; i < s.length; i++) {
        
        if(small < 0 || big < 0 || mid < 0) {
            return false;
        }
        
        if(s[i] === '(') {
            small++;
        } else if (s[i] === '[') {
            mid++;            
        } else if (s[i] === '{') {
            big++;
        } else if (s[i] === ')') {
            small--;
        } else if (s[i] === ']') {
            mid--;
        } else {
            big--;    
        }
    }
    
    if(small === 0 && mid === 0 && big === 0) {
        return true;
    }
}

function solution(s) {
    let check = 0;
    let test = s.split("");

    for(let i = 0; i < test.length; i++) {
        if(compare(test)) {
            check++;
        }
        let last = test.pop();
        test.unshift(last);
    }
    return check;
}
