function solution(array, n) {
    const arr = [];
    for (let i of array) {
        arr.push([i, Math.abs(n - i)])
    }
    return arr.sort((a,b) => a[1] - b[1] || a[0] - b[0] ) [0][0]
}


// 다른 방법
function solution(array, n) {
    array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)
    return array[0]
}