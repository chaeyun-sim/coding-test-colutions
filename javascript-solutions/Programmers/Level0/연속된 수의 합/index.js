function solution(num, total) {
    const minVal = Math.ceil(total / num - Math.floor(num / 2));
    const maxVal = Math.floor(total / num + Math.floor(num / 2));
    
    const arr = [];
    for (let i = minVal; i <= maxVal; i++) {
        arr.push(i)
    }
    return arr
}


// for 문을 사용하는 방법 말고 Array를 사용하는 방법도 있다.
return new Array(num).fill(0).map((_, i) => min + i)