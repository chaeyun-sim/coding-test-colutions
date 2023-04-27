function solution(n) {
    if (n % 2 === 1) {
        return new Array((n - 1) / 2).fill("수박").join("") + "수"
    } else {
        return new Array(n / 2).fill('수박').join("")
    }
}


// repeat, slice를 사용한 풀이
function solution(n) {
    return '수박'.repeat(n/2) + (n % 2 === 1 ? '수': 1)
}