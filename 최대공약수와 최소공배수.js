function solution(n, m) {
    const max = Math.max(n,m);
    const min = Math.min(n,m);
    
    return [gcd(max,min), lcm(max, min)];
}

function gcd (max, min) {
    if(max % min === 0)
        return min;
    else
        return gcd(min, max % min);
}

function lcm (max, min) {
    return (max * min) / (gcd(max, min));
}
