function solution(sizes) {
    let max = [0,0];
    
    sizes.forEach((v,i) => {
        if(v[1] < v[0]) {
          sizes[i] = [v[1],v[0]];
        }
    });
    
    max = [sizes[0][0], sizes[0][1]];
    
    sizes.forEach((v,i) => {
        if(v[0] > max[0]) {
            max[0] = v[0];
        } 
        
        if(v[1] > max[1]) {
            max[1] = v[1];
        }
    })
    
    return (max[0] * max[1]);
    
}
