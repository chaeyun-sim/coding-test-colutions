function solution(score) {
    const arr = score.map(el => el.reduce((a, b) => a + b)/2);
    let sorted = [...arr].sort((a, b) => b - a);
    return arr.map(el => sorted.indexOf(el) + 1)
}

// 진료순서매기기와 비슷한 문제



// filter을 쓰는 또다른 방법
function soltuion(score) {
    score.map((el) => score.filter((v) => (v[0] + v[1]) / 2 > el[0] + el[1] / 2).length + 1)
}