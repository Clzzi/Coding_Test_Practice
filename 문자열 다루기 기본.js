function solution(s) {
    let answer = false;
    
    if ( s.length === 4 || s.length === 6) {
        answer = s.split("").every((v) => (!isNaN(v)))
    }
    
    return answer;
}
