/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1).map(Number);
const max = Math.max(...arr);
const p = [];

for (let i = 0; i <= max; i++) {
  p[i] = i < 3 ? 1 : p[i - 3] + p[i - 2];
}

arr.forEach(t => {
  console.log(p[t - 1]);
});
