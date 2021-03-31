// 내가 한 풀이
function solution(a, b) {
    let answer = 0;
    
    if( a > b) {
        var temp = a;
        a = b;
        b = temp;
    }
    
    for(let i = a; i <= b; i++) {
        answer = answer + i;    
    }
    
    return answer;
}
