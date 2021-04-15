function solution(s) {
    let arr = s.split(" ");
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(j % 2 !== 0) {
                answer.push(arr[i][j].toLowerCase());
            } else{
                answer.push(arr[i][j].toUpperCase());
            }
        }
        if(i !== arr.length - 1) {
            answer.push(" ");
        }
    }
    return answer.join("");
}
