const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ')

const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
console.log(arr[k - 1]);