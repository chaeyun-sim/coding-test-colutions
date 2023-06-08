function solution(survey, choices) {
    const di = { R: 0, T: 0, C: 0, F: 0, J:0, M:0, A:0, N:0}
    for (let i = 0; i < survey.length; i++) {
        let [left, right] = survey[i].split('')
        let result = Math.abs(choices[i] - 4)
        if (choices[i] > 4) {
            di[right] += result
        } else if (choices[i] < 4) {
            di[left] += result
        }
    }
    const tmp = Object.entries(di)
    const arr = [];
    for (let j = 0; j < tmp.length; j += 2) {
        arr.push([tmp[j], tmp[j + 1]])
    }
    return arr.map(el => el.sort((a, b) => b[1] - a[1])[0][0]).join('')
}