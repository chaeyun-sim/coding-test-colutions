function solution(N, stages) {
    const answer = [];
    const arr = stages.sort((a, b) => a - b)
    for (let i = 1; i <= N; i++) {
        const thisStage = arr.filter(el => el === i)
        answer.push([i, thisStage.length / arr.length])
        arr.splice(0, thisStage.length)
    }
    return answer.sort((a, b) => b[1] - a[1]).map(el => el[0])
}