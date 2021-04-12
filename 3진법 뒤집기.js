// 나의 풀이 
function solution(n) {
    let arr = [];
    
    while(n > 0) {
        arr.push(Math.floor(n % 3)); // 나머지 저장
        n = Math.floor(n / 3);
    }
    
    let arrLen = arr.length;
    let com = 1;
    let answer = 0;
    
    for(let i = arrLen - 1 ; i >= 0; i--) {
        answer = answer + (arr[i] * com);
        com = com * 3;
    }
    
    return answer;
}

// 다른 사람의 풀이
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
