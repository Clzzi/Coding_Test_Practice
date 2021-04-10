function solution(phone_number) {
    const len = phone_number.length;
    
    const phoneArr = phone_number.split("");
    
    for(let i = 0; i < len-4; i++) {
        phoneArr[i] = '*';
    }
    
    return phoneArr.join("");
}
