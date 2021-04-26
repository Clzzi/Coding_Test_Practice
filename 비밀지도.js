// for문을 이용한 풀이 
function toSecond(data, n) {
    let len = data.length;
    let answer = [];
    let a=[];
    for(let i = 0; i < len; i++) {
        while(data[i]>0) {
            answer.push(data[i]%2);
            data[i]=Math.floor(data[i]/2);
        }
 
        if(answer.length < n) {
            while(answer.length < n) {
                answer.push(0);
            }
        }
        
        answer = answer.slice(0,n).reverse();
        a.push(answer);
        answer = [];
    }
    return a;
}

function add(a1,a2) {
    let len = a1.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            a1[i][j] = a1[i][j] + a2[i][j];
        }
    }
    return a1;
}

function answerFn (an1, len) {
    let answer = [];
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(an1[i][j] > 0) {
                an1[i][j] = '#';
            } else {
                an1[i][j] = " ";
            }
        }
    }

    for(let i = 0; i < len; i++) {
        let k = an1[i].join('');
        answer.push(k);
    }
    
    return answer;
}


function solution(n, arr1, arr2) {
    let a1 = toSecond(arr1, n);
    let a2 = toSecond(arr2, n);
    let an1 = add(a1,a2);
    let an2 = answerFn(an1,n);    
    return an2;
}
