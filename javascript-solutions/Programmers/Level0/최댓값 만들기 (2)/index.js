function solution(numbers) {
    const arr = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] * numbers[j])
        }
    }
    return arr.sort((a,b) => b - a)[0]
}


// 다른 풀이
function solution(numbers){
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2])
}