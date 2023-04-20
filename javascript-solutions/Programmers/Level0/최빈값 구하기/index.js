function solution(array) {
    const di = new Map();
    array.map(el => di[el] > 0 ? di[el] += 1 : di[el] = 1)
    const arr = Object.entries(di)
    const sorted = arr.sort((a, b) => b[1] - a[1] )
    return sorted.filter(el => el[1] === sorted[0][1]).length === 1 || sorted[0][1] > sorted[1][1] ? Number(sorted[0][0]) : -1
}