function solution(brown, yellow) {
    let arr = []
    for (let i = 2; i <= Math.floor((brown + yellow) / 2); i++) {
        if ((brown + yellow) % i === 0) {
            arr.push([(brown + yellow) / i, i])
        }
    }
    
    for (let v of arr) {
        if ((v[0] - 2) * (v[1] - 2) === yellow) {
            return v
        }
    }
}