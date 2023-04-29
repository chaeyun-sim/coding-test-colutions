function solution(s) {
    const total = [];
    const answer = [];
    for (let l of s) {
        if (!total.includes(l)) {
            total.push(l)
            answer.push(-1)
        } else {
            const idx = total.lastIndexOf(l)
            total.push(l)
            answer.push(total.length - idx - 1)
        }
    }
    return answer
}


// 간결한 풀이
function solution(s) {
    const hash = {};
    return [...s].map((v, i) => {
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    })
}