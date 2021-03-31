// 내가 푼 풀이
function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let start = commands[i][0];
        let end = commands[i][1];
        let index = commands[i][2];
        let test = array.slice(start - 1, end).sort((x, y) => x - y);
        answer.push(test[index - 1]);
    }
    return answer;
}

// 다른사람이 푼 풀이
function solution(array, commands) {
    return commands.map(command => {
        return array.slice(command[0]-1, command[1]).sort((x, y) => x - y)[command[2] - 1];
    });
}
