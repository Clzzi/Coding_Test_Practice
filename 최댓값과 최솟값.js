function solution(s) {
    let array = [];
    let answer = "";
    
    s.split(" ").forEach((item) => array.push(Number(item)));
    array.sort((a,b) => {return a - b});
    
    return `${array[0]} ${array[array.length - 1]}`;    
}
