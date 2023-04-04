function solution(n) {
    return Math.floor(n ** (1 / 2)) === n ** (1 / 2) ? 1 : 2
}


// sqrt를 사용한 풀이
function solution(n){
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2
}