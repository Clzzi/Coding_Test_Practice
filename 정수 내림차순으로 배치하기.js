function solution(n) {
    let test = (n+"").split("").sort((a, b) => b - a).join("");
    return +test;
}
