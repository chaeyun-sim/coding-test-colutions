function solution(arr, divisor) {
    const lst = arr.filter(el => el % divisor === 0).sort((a, b) => a - b) 
    return lst.length === 0 ? [-1] : lst
}