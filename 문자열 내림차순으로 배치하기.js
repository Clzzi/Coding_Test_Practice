function solution(s) {
    const words = s.split('');
    const sortAnswer = words.sort();
    const reversedAnswer = sortAnswer.reverse();
    
    const answer = reversedAnswer.join('');
    return answer;
}
