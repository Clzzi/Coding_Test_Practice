function solution(numbers) {
    let i = 0;
    let j = 0;
    let arr = [];
    
    for(i = 0 ; i <numbers.length; i++) {
        for(j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }

    function removeDuplicates(data) {
        return data.filter((v, i) => data.indexOf(v) === i);
    }
    
    function sortNumberAsc(a,b) { return a - b; }
    
    let duplicatedAnswer = removeDuplicates(arr);
        
    const answer = duplicatedAnswer.sort(sortNumberAsc);
    return answer;
}
