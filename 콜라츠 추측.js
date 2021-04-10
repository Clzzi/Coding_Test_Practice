function solution(num) {
    let check = 0;
    while(num > 1) {
        if(num % 2 === 0) {
            num = num / 2;
            check++;
        } else {
            num = (num * 3) + 1;
            check++;
        }
    }
    if(check >= 500) {
        return -1;
    } else {
        return check;
    }
}
