function solution(absolutes, signs) {
    let test = [];
    
    for(let j = 0; j < absolutes.length; j++) {
        if(signs[j] === true) {
            test.push(Number.parseInt(absolutes[j]));
        } else {
            test.push(Number.parseInt(absolutes[j]) - (Number.parseInt(absolutes[j]) * 2));
        }
    }
    let answer = 0;
    test.map((v) => answer = answer + v);
    return answer;
}
