function solution(arr1, arr2) {
    let outerLen = arr1.length;
    let innerLen = arr1[0].length;
    
    for(let i = 0; i < outerLen; i++) {
        for(let j = 0; j < innerLen; j++) {
            arr1[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    return arr1
}
