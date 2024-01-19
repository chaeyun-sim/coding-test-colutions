/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const X = Number(input[0]);

let lastNum = 1;
let col = 1;

while (lastNum < X) {
  lastNum += col + 1;
  col++;
}

const bottom = col - (lastNum - X);
const top = col - bottom + 1;

if (!(col % 2)) {
  console.log(`${bottom}/${top}`);
} else {
  console.log(`${top}/${bottom}`);
}

// 아하..!
