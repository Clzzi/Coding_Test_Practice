function solution(arr, divisor) {
    let test = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            test.push(arr[i]);
        }
    }
    
    if(test.length === 0) {
        return [-1];
    } else {
        return test.sort((a, b) => a - b);
    }
}
