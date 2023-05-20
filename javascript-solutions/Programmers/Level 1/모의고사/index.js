function solution(answers) {
    let result = []
    const a = [1, 2, 3, 4, 5]
    const b = [2, 1, 2, 3, 2, 4, 2, 5]
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for (let s of [a, b, c]) {
        result.push(answers.filter((el, i) => el === s[i % s.length]).length)
    }
    const max = Math.max(...result)
    result = result.map((el, index) => max === el ? index + 1 : 0).filter(el => el !== 0)
    
    return result
}