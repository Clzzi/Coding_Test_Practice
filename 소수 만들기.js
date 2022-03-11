function solution(nums) {
    const allCases = getCombinations(nums,3);
    let answer = [];
    
    allCases.forEach((nums) => {
        let key = 0;
        let check = [];
        
        nums.forEach((value) => {
            key = key + value;
        });
        
        for(let i = 1; i <= key; i++) {
// 소수구하기 => 1 부터 N까지 돌면서 N을 i로 나눈 나머지가 0이면 push, 
// push한 배열 길이가 2개면 최소공배수가 2개니까 소수임
            if(key % i === 0) check.push(i);
        }
    
        if(check.length === 2) answer.push(key);
    });
    
    return answer.length;
}

const getCombinations = (arr, selectNumber) => { // nCr에 대한 모든 경우의수 구하는 함수
    const results = [];
    
    if(selectNumber === 1) {
        return arr.map((el) => [el]);
    } else {
        arr.forEach((fixed,index,origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest,selectNumber - 1);
        const attached = combinations.map((el) => [fixed,...el]);    
        results.push(...attached);
    });
    }
    
    return results;
}
