// 내가 푼 풀이
function changeNum(data) {
    data.map((v,i) => {
        data[i] = +v;
    });
    return data;
}

function solution(arr)
{
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            arr[i] = "";
        }
    }
    
    return changeNum(arr.join('').split(''));
}

// 다른 사람의 풀이
function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}
