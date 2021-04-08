function solution(x) {
    let num = 0;
    (x+"").split("").map((v) => num += +v)
    if(x%num) {
        return false
    }
    else {
        return true
    }
}
