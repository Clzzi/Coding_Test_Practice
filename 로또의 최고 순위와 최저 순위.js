function solution(lottos, win_nums) {
    let isNum = [];
    let zeroNum = 0;
    let answer = [0,0];
    
    lottos.map((num) => {
        if(num !== 0) {
            isNum.push(num);
        } else {
            zeroNum++;
        }
    });
    
    let correct = checkCorrect(isNum, win_nums);
    
    answer[0] = correct;
    answer[1] = correct + zeroNum;
    return returnAnswer(answer);
}

function checkCorrect(isNum, win_nums) {
    let correct = 0;
    for(let i = 0; i < isNum.length; i++) {
        if(win_nums.includes(isNum[i])) {
            correct++;
        }
    }
    return correct;
}

function numToRank(answer) {
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === 6) {
            answer[i] = 1;
        } else if (answer[i] === 5) {
            answer[i] = 2;
        } else if (answer[i] === 4) {
            answer[i] = 3;
        } else if (answer[i] === 3) {
            answer[i] = 4;
        } else if (answer[i] === 2) {
            answer[i] = 5;
        } else if (answer[i] === 1) {
            answer[i] = 6;
        } else {
            answer[i] = 1;
        }
    }
    return answer;
}

function returnAnswer(answer) {
    if(answer[0] === 0 && answer[1] === 6) {
        answer[0] = 1;
        answer[1] = 6;
    } else if (answer[0] === 0 && answer[1] === 0) {
        answer[0] = 6;
        answer[1] = 6;
    } else {
        answer = numToRank(answer);
        answer = answer.sort(function(a, b){
            return a - b;
        });
    }
    return answer;
}
