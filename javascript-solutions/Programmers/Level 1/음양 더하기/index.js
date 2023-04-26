// 처음 풀이 (시간이 많이 나왔다.)
function solution(absolutes, signs) {
    return absolutes.map((el, i) => !signs[i] ? el * -1 : el).reduce((a, b) => a + b)
}

// 다음 풀이
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (!signs[i]) {
            answer -= absolutes[i]
        } else {
            answer += absolutes[i]
        }
    }
    return answer
}