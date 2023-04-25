function solution(x) {
    return x % [...x.toString()].reduce((a, b) => Number(a) + Number(b)) === 0
}