// .getDay()를 이용한 풀이
function solution(a, b) {
    const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    const answer = days[new Date(`2016.${a}.${b}`).getDay()];
    return answer;
}

// 실제 공식을 이용한 풀이
// => 1월 1일 부터 a월 b일 까지의 날짜 수를 구해서 7로 나눈 나머지를 weekDays[나머지]로 리턴 해줌 몇년인지에 따라 weekDays의 시작을 다르게 해야함
function solution(a, b) {
    const monthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    const weekDays = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    
    let days = b;
    
    for(let i = 0; i < a - 1; i++) {
        days = days + monthDays[i];
    }
    
    return weekDays[days % 7];
}
