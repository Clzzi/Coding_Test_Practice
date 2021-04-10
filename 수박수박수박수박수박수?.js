function solution(n) {
    let test = "";
    for(let i = 1 ; i <= n; i++) {
        if(i % 2 === 0) {
            test += "박";
        } else {
            test += "수";
        }
    }
    return test;
}
