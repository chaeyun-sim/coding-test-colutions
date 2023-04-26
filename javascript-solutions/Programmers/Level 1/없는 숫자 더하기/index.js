function solution(numbers) {
    const arr = new Array(9).fill().map((_, i) => i + 1)
    return arr.filter(el => !numbers.includes(el)).reduce((a, b) => a + b)
}