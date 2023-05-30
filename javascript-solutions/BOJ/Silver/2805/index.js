const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let start = 1
let end = Math.max(...arr)

while (start <= end) {
    const mid = Math.floor((start + end ) / 2)
    
    let sum = arr.map(el => el > mid ? el - mid : 0).reduce((a, b) => a + b)
    
    if (sum >= m) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}

console.log(end)