function solution(left, right) {

    function getNums(num) {
    let n = 0;
    for(let i = 1 ; i <= num; i++) {
        if(num % i === 0) {
            n++;
        }
    }
    return n;
}

function compareNums (n) {
    if(n%2 === 0) {
        return true;
    } else {
        return false;
    }
}
    
    let now = left;
    let answer = 0;
    while(now <= right) {
        let n = getNums(now);
        if(compareNums(n)) {
            answer+=now;
            now++;
        } else {
            answer-=now;
            now++;
        }
    }
    return answer;
}
