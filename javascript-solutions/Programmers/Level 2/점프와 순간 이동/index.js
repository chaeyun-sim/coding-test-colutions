function solution(n) {
    let cnt = 0
    while (n >= 2) {
        if (n % 2 === 0) {
            n /= 2
        } else {
            n -= 1
            cnt++
        }
    }
    return cnt + 1
}