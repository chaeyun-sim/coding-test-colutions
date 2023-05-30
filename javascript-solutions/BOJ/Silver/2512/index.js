const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
const account = Number(input[2])

let start = 1
let end = Math.max(...arr)

while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let sum = arr.map(el => Math.min(el, mid)).reduce((a, b) => a + b)
    
    if (sum <= account) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}

console.log(end)