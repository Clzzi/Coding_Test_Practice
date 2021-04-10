function solution(s, n) {
    let arr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === " ") {
            arr[i] = " ";
        } else {
            // 대문자
            if(s[i].charCodeAt() < 91) {
                let ascii = s[i].charCodeAt() + n;
                if(ascii > 90) {
                    arr[i] = String.fromCharCode(ascii - 26);
                    console.log(arr[i]);
                } else {
                    arr[i] = String.fromCharCode(ascii);
                }   
            }
            // 소문자 
            else {
                let ascii = s[i].charCodeAt() + n;
                if(ascii > 122) {
                    arr[i] = String.fromCharCode(ascii - 26);
                } else {
                    arr[i] = String.fromCharCode(ascii);
                }
            }
        }
    }
    return arr.join("");
}
