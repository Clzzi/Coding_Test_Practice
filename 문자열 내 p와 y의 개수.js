// 내가 한 풀이
function solution(str){
    let s = 0;
    let y = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'p' || str[i] === 'P') { 
            s++;    
        } 
        if (str[i] === 'y' || str[i] === 'Y') {
            y++;
        }
    }
    
    if (s !== y) {
        return false;
    } else {
        return true;
    }
}

// 다른 사람이 한 풀이중 좋다고생각한것
function numPY(s){
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
