function solution(name, yearning, photo) {
    const di = {};
    name.map((el, i) => di[el] = yearning[i])
    const lst = photo.map(item => item.map(el => name.includes(el) ? di[el] : 0).reduce((a, b) => a + b))
    return lst
}