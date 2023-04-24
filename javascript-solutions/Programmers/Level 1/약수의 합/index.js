function solution(n) {
    const nums = new Array(n).fill().map((_, i) => i + 1)
    const result = nums.filter(el => n % el == 0)
    return result.length > 0 ? result.reduce((a, b) => a + b) : 0
}