const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = parseInt(input[0])
const b = input[1]

console.log(a * parseInt(b[2]));
console.log(a * parseInt(b[1]));
console.log(a * parseInt(b[0]));
console.log(a * parseInt(b))