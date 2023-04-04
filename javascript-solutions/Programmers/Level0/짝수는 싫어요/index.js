function solution(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            answer.push(parseInt(i))
        }
    }
    return answer
}

// i++ 말고 i += 2 를 하면 1부터 2씩 올라갈 수 있다.

// 조금 복잡하지만 Array를 사용한 방법
function solution(n) {
    Array.from({ length: n}, (_, i) => i + 1).filter(i => i % 2 !== 0)
}