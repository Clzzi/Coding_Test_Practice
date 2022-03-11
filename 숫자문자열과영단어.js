function solution(s) {
    const numberArr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    numberArr.forEach((v,i) => s = s.replace(new RegExp(v, "g"),i));
        
    return Number(s);
}
