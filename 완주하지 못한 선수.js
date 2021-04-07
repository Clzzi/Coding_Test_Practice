// 1번 풀이
for(let i = 0; i < completion.length; i++) { 
        for(let j = 0; j < participant.length; j++) {
            if (completion[i] === participant[j]) {
                completion[i] = 'complete';
                participant[j] = 'complete';
            }
        }
    }
    
    const answer = participant.filter((v) => v !== 'complete');
    return answer.toString();

// 2번 풀이
let mainList = {};
    participant.forEach((v) => {
        if(mainList[v]) {
            mainList[v] = mainList[v] + 1;
        } else {
            mainList[v] = 0 + 1;
        }
    });
    
    completion.forEach((v) => {
        if(mainList[v]) {
            mainList[v]--;
        }
    })
    
    let mainArray = Object.entries(mainList).filter((v) => v[1] === 1);
    const answer = mainArray[0][0];
    return answer;
