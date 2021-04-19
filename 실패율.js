function detectMax(value) {
    let compare = value[0];
    for(let i = 0; i < value.length; i++) {
        if(compare < value[i]) {
            let temp = value[i];
            compare = temp;
            value[i] = compare;
        }
    }
    return compare;
}

function getIndexOfList(list) {
    let temp = new Map();
    let answer = [];

    for(let i = 0; i < list.length; i++) {
        temp.set(i+1,list[i]);
    }
    
    let sortedArray = Array.from(temp).sort((a,b) => { return b[1] - a[1] });
    
    for(let i = 0; i < sortedArray.length; i++) {
        answer.push(sortedArray[i][0]);
    };
    
    return answer;
}

function solution(N, stages) {
    let stagesLen = stages.length;
    let objectNum = {};
    let test = [];
    let stagesNumbers = [];
    let Max = detectMax(stages);
    
    for(let i = 1; i <= Max; i++) {
        stagesNumbers.push(i);
    }
    
    for(let i = 1; i <= N+1; i++) {
        objectNum[i] = 0;
    }
 
    for(let i = 0; i < stagesLen; i++) {
        objectNum[stages[i]] += 1;
    }
    
    for(let i = 0; i <= N; i++) {
        if(objectNum[stagesNumbers[i]] === 0) {
            test.push(0);
        } else if (stagesLen === 0) {
            test.push(0);
        } else {
            let t = objectNum[stagesNumbers[i]]/stagesLen;
            test.push(t);
            stagesLen -= objectNum[stagesNumbers[i]];
        }
    }
    test = test.splice(0,N);
    test.map((v, i) => {
        if(isNaN(v))
            test[i] = 0;
    });
    
    return getIndexOfList(test);
}
