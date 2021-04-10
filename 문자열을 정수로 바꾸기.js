function solution(s) {
    if(s[0].charCodeAt === 77) {
        return +s - (+s*2);
    } else {
        return +s;
    }
}
