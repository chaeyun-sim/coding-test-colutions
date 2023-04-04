// 테스트 2 실패, 정확성 96.8

function solution(n) {
    return [...n.toString()].reduce((a, b) => Number(a) + Number(b))
}


// 성공

function solution(n) {
    let answer = 0;
    const arr = [...n.toString()].map(el => answer += Number(el))
    return answer
}


// 다른 풀이
function solution(n){
    return n.toString().split("").reduce((a, b) => a + Number(b), 0)
}