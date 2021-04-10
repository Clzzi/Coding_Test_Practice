function solution(n)
{
    const test = (n + "").split("");
    let count = 0;

    for(let i = 0; i < test.length; i++) {
        count = count + +test[i];
    }
    return count;
}
