function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const answer = days[new Date(`2016.${a}.${b}`).getDay()];
    return answer;
}
