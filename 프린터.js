function solution(priorities, location) {
    // list 라는 변수를 객체 배열 속의 객체 형식으로 만들어서 priorities.map을 이용해 
    // 객체의 각 첫 인자에는 map에서 가져온 v(value)값과 i(index)값을 이용해 value에는 v를
    // mystatus에는 index값이 사용자가 원하는 location인지 판별(T/F) 해주게 해서 만들어준다.
    let list = priorities.map((v, i) => ({
        value: v,
        mystatus: i === location,
    }));
    // console.log(list); => 아마 value값이 나오고 mystatus값에는 true 하나 false 여러개로 나올것
    
    // 몇번째에 뽑혔는지 판별하기 위해 count변수를 한 만들어 준다.
    let count = 0;
    
    // while문을 써서 반복루프를 만들어주고
    while(true) {
        // current라는 변수로 list배열의 제일 앞 객체를 가져온다. shift를 한 이상 list객체에서 없어진 상태.
        let current = list.shift();
        // some () 함수를 이용해 list배열의 각 객체중 더 큰 값이 있는지 판별해주고
        // 만약 더 큰 값이 존재한다면 shift해서 뽑은 current값을 다시 list배열에 push 해준다
        if(list.some((v) => v.value > current.value)) {
            list.push(current);
        } 
        // 만약 더 큰 값이 존재하지 않는다면 current값은 제일 우선순위가 높은 값이므로 
        // 프린트 완료되는것이고 그 의미로 count를 1 더해준다.
        // 만약 우선순위가 제일 높은 값인데 여기에다가 현재값의 mystatus가 true라면?
        // 우리가 찾던 그 문서니까 count를 리턴 해준다.
        else {
            count++;
            if(current.mystatus) {
                return count;
            }
        }
    }
}
