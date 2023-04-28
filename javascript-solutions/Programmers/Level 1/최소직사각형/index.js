function solution(sizes) {
    const result = [];
    sizes.map((el, i) => el.sort((a, b) => b - a))
    // 요소를 큰 수부터 정렬하기 (세로 가로 상관없이 정렬)
    for (let i = 0; i < sizes[0].length; i++) {
        result.push(sizes.sort((a, b) => b[i] - a[i])[0][i])
        // 배열을 세로 0번 또는 가로 0번부터 정렬해서 가장 큰 두 값을 출력하기
    }
    return result.reduce((a, b) => a * b)
}


// min-max 를 사용하는 방법
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}