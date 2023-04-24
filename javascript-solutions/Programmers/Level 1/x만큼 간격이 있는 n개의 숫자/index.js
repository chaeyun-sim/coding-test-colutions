function solution(x, n) {
    return new Array(n).fill().map((_, i) => (i * x) + x)
}