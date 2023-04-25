function solution(num) {
    let total = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2
        } else {
            num = (num * 3) + 1
        }
        if (total >= 500) {
            return -1
        }
        total += 1
    }
    return total
}