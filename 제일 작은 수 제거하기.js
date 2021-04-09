function solution(arr) {
    const len = arr.length;
    let minValue = arr[0];
    
    for(let i = 0; i < len; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    
    if(arr.every((v) => v === minValue)) {
        return [-1];
    } else {
        for(let i = 0; i < len; i++) {
            if (arr[i] === minValue) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    
    return arr;
}
