const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...arr] = input;

arr.sort((a, b) => a - b);
console.log(arr.join('\n'));