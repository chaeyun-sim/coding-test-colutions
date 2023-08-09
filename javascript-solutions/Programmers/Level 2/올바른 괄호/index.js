// 0.04ms, 33.4MB => 효율성 시간 초과

function solution(s){
    const stack = [s.split('')[0]]
    for (let i = 1; i < s.split('').length; i++) {
        stack.push(s[i])
        if (stack[stack.length - 2] + stack[stack.length - 1] === '()') {
            stack.pop()
            stack.pop()
        }
    }
    return stack.length === 0
}