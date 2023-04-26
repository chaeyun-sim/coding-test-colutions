function solution(s) {
    const mid = Math.floor(s.length / 2)
    if (s.length % 2 !== 0) {
        return s[mid]
    } else {
        return [...s].splice(mid - 1, 2).join('')
    }
}