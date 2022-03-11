function solution(numbers) {
    let numberArr = [0,1,2,3,4,5,6,7,8,9];
    let answer = 0;
    
    numbers.forEach(v => numberArr = numberArr.filter(k => v !== k));
    numberArr.forEach(v => answer = answer + v);
    
    return answer;
}
