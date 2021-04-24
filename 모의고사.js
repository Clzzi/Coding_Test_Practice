function checkMax(data) {
    let compare = data[0];
    for(let i = 0; i < data.length; i++) {
        if(compare < data[i]){
            compare = data[i];
        }
    }
    return compare;
}

function solution(answers) {
    let answerLen = answers.length;
    let firstAnswer = [];
    let firstIndex = 1;
    for(let i = 0; i < answerLen; i++) {
        if(firstIndex <= 5) {
            firstAnswer.push(firstIndex);
            firstIndex++;    
        } else {
            firstIndex = 1;
            i--;
        }        
    }

    let secondAnswer = [];
    let secondIndex = 1;
    for(let i = 0; i < answerLen; i++) {
        if(secondIndex !== 2) {
            if(i % 2 === 0) {
                secondAnswer.push(2);
            } else {
                if(secondIndex <= 5) {
                    secondAnswer.push(secondIndex);
                    secondIndex++;
                } else {
                    secondIndex = 1;
                    i--;
                }
            }
        } else {
            secondIndex++;
            i--;
        }
    }

    let thirdAnswer = [];
    let thirdIndex = 3;
    for(let i = 0; i < answerLen; i++) {
        if(thirdIndex <= 5) {
            if(thirdIndex === 3) {
                if(thirdAnswer[i-1] === 3) {
                    thirdAnswer.push(3);
                    thirdIndex = thirdIndex - 2;
                } else {
                    thirdAnswer.push(3);
                }
            } else {
                if(thirdAnswer[i-1] === thirdIndex) {
                    thirdAnswer.push(thirdIndex);
                    if(thirdIndex === 2) {
                        thirdIndex = thirdIndex + 2;
                    } else {
                        thirdIndex++;   
                    }
                } else {
                    thirdAnswer.push(thirdIndex);
                }
            }
        } else {
            thirdIndex = 3;
            i--;
        }
    }

    let score = [0,0,0];
    for(let i = 0 ; i < answerLen; i++) {
        if(answers[i] === firstAnswer[i]){
            score[0]++;
        }
        if(answers[i] === secondAnswer[i]) {
            score[1]++;
        }
        if(answers[i] === thirdAnswer[i]) {
            score[2]++;
        }
    }

    let max = checkMax(score);    
    let answer = [];
    if(max === 0) {
        return [];
    } else {
        for(let i = 0; i < score.length; i++) {
          if(score[i] === max) {
                answer.push(i+1);
            }  
        }
    return answer;   
    }
}
