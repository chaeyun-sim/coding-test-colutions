/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const target = Number(input);
const disasterNumber = 666;
let num = disasterNumber;
let cnt = 1;

while (cnt !== target) {
  if (String(num).includes(disasterNumber + '')) cnt++;
  num++;
}

console.log(num);
