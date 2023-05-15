const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const arr = input[0].split(' ').map(el => Number(el));
arr.sort((a, b) => a - b)

console.log(arr.join(' '))