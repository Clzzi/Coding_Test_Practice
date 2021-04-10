function solution(arr) {
    let count = 0;
    arr.map((v) => count = count + v);
    return count/arr.length;
}
