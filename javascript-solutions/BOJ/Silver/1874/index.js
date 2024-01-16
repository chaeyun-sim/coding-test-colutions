/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1).map(Number);
const stack = [];
const operators = [];
let cnt = 1;
let flag = true;

arr.forEach(num => {
  while (cnt <= num) {
    stack.push(cnt);
    cnt++;
    operators.push('+');
  }

  const popNum = stack.pop();
  operators.push('-');

  if (popNum !== num) {
    flag = false;
    return;
  }
});

if (flag) {
  console.log(operators.join('\n'));
} else {
  console.log('NO');
}
