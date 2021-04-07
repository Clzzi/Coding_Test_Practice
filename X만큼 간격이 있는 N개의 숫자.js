function solution(x, n) {
    if(x > 0) {
        let arr = [];
        for(let i = x; i <= x * n; i = i + x) {
            arr.push(i);
        }
        return arr;
    } else if(x === 0) {
        let arr = [];
        for(let i = 0; i < n; i++) {
            arr.push(0);
        }
        return arr;
    } else {
        let arr = [];
        for(let i = x; i >= x * n; i = i + x) {
            arr.push(i);
        }
        return arr;
    }
}
