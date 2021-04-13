function solution(n) {
    let test = Array(n+1).fill(true); // n + 1만큼 배열을 true로 채워준다.
    let cnt = 0; // true카운트해주는 cnt변수 생성
    test[0] = false; // true의 0번째와 1번째 인자를 false로 해준다
    test[1] = false; // 그 이유는 아래의 에라토스테네스의 체 알고리즘을 구현하기 위함임
    
// 에라토스테네스의 체 알고리즘
    for(let i = 2; i <= n; i++) { 
        if(test[i] === true) { 
            for(let j = i * 2; j <= n; j = j + i) {
                test[j] = false;
            }
        }
    }
// test 배열에서 true인것 즉, 소수인것만 cnt해준다.
    for(let i = 0; i < test.length; i++) {
        if(test[i] === true) {
            cnt++;
        }   
    }  
    return cnt;
}
