function solution(s) {
    const S = s.split(' ').map(Number)
    const min = Math.min(...S)
    const max = Math.max(...S)
    return `${min} ${max}`
}