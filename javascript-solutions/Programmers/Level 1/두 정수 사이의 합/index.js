function solution(a, b) {
    let total = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        total += i
    }
    return total
}



// 등차수열로 풀이
function solution(a, b) {
    return (a + b) * ((Math.abs(a - b) + 1) / 2)
}