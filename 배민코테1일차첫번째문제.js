function solution(weights, head2head) {
  let information = [];

  for(let k = 0; k < weights.length; k++) {
    information[k] = {win : 0, bigger: 0, weight: 0};
    information[k].weight = weights[k];
  }

  for(let i = 0 ; i < weights.length; i++) {
    for(let j = 0; j < head2head.length; j++) {
      if(head2head[i][j] === 'W') {
        information[i].win++;
        if(weights[i] < weights[j]) {
          information[i].bigger++;
        }
      }
    }
  }

  let sortedInfo = information.sort(function(a, b) {
    return a.win < b.win ? 3 : a.win > b.win ? -3 : a.bigger < b.bigger ? 2 : a.bigger > b.bigger ? -2 : a.weight < b.weight ? 1 : a.weight > b.weight ? -1 : 0;
  });
  let answer = [];
  for(let i = 0; i < weights.length; i++) {
    for(let j = 0; j < sortedInfo.length; j++) {
      if(sortedInfo[i].weight === weights[j]) {
        answer.push(j+1);
        weights[j] = i+j+999;
      }
    }
  }
  return answer;
}
