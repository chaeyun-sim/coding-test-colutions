const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ')

const a = parseInt(input[0])
const b = parseInt(input[1])

console.log(`${a + b}\n${a - b}\n${a * b}\n${parseInt(a / b)}\n${a % b}`)