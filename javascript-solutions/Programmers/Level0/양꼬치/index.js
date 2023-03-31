function solution(n, k) {
    const bonus = parseInt(n / 10)
    return (n * 12000) + ((k - bonus) * 2000)
}