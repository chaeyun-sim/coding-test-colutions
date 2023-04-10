function solution(my_string) {
    const arr = [...my_string.toLowerCase()].sort().join('')
    return arr
}