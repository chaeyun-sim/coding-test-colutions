function solution(t, p) {
    let answer = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        const value = t.slice(i, p.length + i);
        if (Number(value) <= Number(p)) {
            answer += 1
        }
    }
    return answer;
}