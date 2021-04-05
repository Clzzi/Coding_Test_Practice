function solution(bridge_length, weight, truck_weights) {
    // 처음 트럭의 무게는 트럭들 무게받은거 중에 젤 마지막껄 임의로 설정해줌
    const firstTruck = truck_weights.shift();
    // bridge 배열을 만들어서 처음 트럭 넣어야하니까 전체 다리 길이 - 1 만큼을 0으로 채워줌
    let bridge = new Array(bridge_length - 1).fill(0);
    // bridge배열에 처음뽑은 트럭을 push해줌
    bridge.push(firstTruck);
    // 현재 다리무게를 넣는 변수를 만들어주고 처음뽑은 트럭무게를 넣어줌
    let bridgeWeight = firstTruck;
    // 경과시간을 체크하기위한 time변수 하나 만들기
    let time = 1;
    
    // 항상 다리위에 차가 지나가게 해야 최단시간안에 갈 수 있으므로 현재 다리무게가 0이면 끝난것을 의미
    while(bridgeWeight) {
        // 현재다리무게에서 처음에 넣은 차량의 무게를 빼줌 마지막껄
        bridgeWeight = bridgeWeight - bridge.shift();
        // 다음 차량의 무게를 받은 차들배열중에 가장 처음껄로 넣어줌
        const nextTruckWeight = truck_weights[0];
        
        // 만약 현재다리무게 + 다음 올라올 차량의 무게가 전체 버틸수있는 다리 무게를 넘지 않으면
        if(bridgeWeight + nextTruckWeight <= weight) {
            // 다리 배열에 다음 차량의무게를 push해주고
            bridge.push(nextTruckWeight);
            // 처음 받은 트럭 목록중에서 빼줌
            truck_weights.shift();
            // 그러고나서 현재다링무게에 다음차량무게를 더해줌.
            bridgeWeight = bridgeWeight + nextTruckWeight;
        }
        // else인 경우는 차가 다 지나간 경우밖에 없음
        else {
            // 차가 다 지나갔으므로 다리 배열에서 0을 push해줌 
            bridge.push(0);
        }
        // 이 로직을 다 수행하면 1초가 흐르는 거임
        time++
    }
return time;   
}
