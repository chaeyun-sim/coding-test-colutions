function solution(numbers) {
    const total = numbers.reduce((a, b) => a + b)
    return total / numbers.length
}