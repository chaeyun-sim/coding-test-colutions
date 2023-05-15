const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = Number(input[0].split('').sort((a, b) => b - a).join(''))
console.log(answer)