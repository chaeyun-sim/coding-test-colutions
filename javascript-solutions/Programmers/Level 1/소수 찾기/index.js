function solution(n) {
    const arr = new Array(n + 1).fill(true);
    const result = []
    
    for (let i = 2; i <= n / 2; i++) {
        for (let k = i + i; k <= n; k += i){
            arr[k] = false;
        }
    }
    arr.forEach((el, idx) => el ? result.push(idx) : el)
    return result.length - 2
};