// 내가 푼 풀이
function solution(s) {
    const arr = s.split('');
    let len = arr.length;
    if(len%2 === 1) {
        return arr[Math.floor(len/2)];
    } else {
        return arr[len/2 - 1] + arr[len/2]
    }
} 
