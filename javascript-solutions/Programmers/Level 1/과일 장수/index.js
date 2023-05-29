function solution(k, m, score) {
    score.sort((a, b) => b - a);
    
    const result = [];
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        result.push(score.slice(i * m, (i * m) + m))
    }
    
    const filtered = result.filter((el) => el.length === m);  // 처음에 필터링 없이 출력했더니 13번에서 시간초과가 떴다.
    return filtered.map(el => Math.min(...el) * m).reduce((a, b) => a + b, 0)
}