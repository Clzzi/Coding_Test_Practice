function solution(n) {
    const k = Math.sqrt(n);
    if(Number.isInteger(k)) {
        return (k+1)*(k+1);
    } else {
        return -1
    }    
}
