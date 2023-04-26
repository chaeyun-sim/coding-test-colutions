function solution(arr) {
    const result = arr.filter(el => Math.min(...arr) !== el)
    return result.length === 0 ? [-1] : result
}