function solution(price, money, count) {
    let clientMoney = 0;
    
    for(let i = 1; i <= count; i++ ) {
        clientMoney += price * i;  
    }
    
    if(clientMoney <= money) {
        return 0;
    } else {
        return clientMoney - money;
    }
}
