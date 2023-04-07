function solution(numbers, direction) {
    if (direction == 'right') {
        numbers.unshift(numbers[numbers.length - 1])
        numbers.pop()
        // numbers.unshift(numbers.pop()) 이렇게도 할 수 있다.
        return numbers
    } else {
        numbers.push(numbers[0])
        numbers.shift()
        // numbers.push(numbers.shift());
        return numbers
    }
}


// 다른 풀이
function solution(numbers, direction) {
    return direction === 'right' ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)] : [...numbers.slice(1), numbers[0]]
}