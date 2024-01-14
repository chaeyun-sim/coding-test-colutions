/** @format */

// 틀렸습니다!
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let i = 1;
let j = 2;
let total = [1];

while (true) {
  if (total.at(-1) > n) {
    console.log(total.length);
    break;
  }

  total.push(total.at(-1) + (i * 2 + j * 2));
  i += 1;
  j += 2;
}

// 성공!

let num = Number(input);
let count = 1;
let range = 1;

while (range < num) {
  range += 6 * count;
  count += 1;
}

console.log(count);
