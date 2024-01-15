/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [t, ...arr] = input.map(Number);

function solution(arr) {
  if (!arr.length) {
    console.log(0);
    return;
  }

  const limit = Math.round(t * 0.15);

  arr.sort((a, b) => a - b);
  arr.splice(arr.length - limit, limit);
  arr.splice(0, limit);

  const average = arr.reduce((a, b) => a + b) / arr.length;

  console.log(Math.round(average));
}

solution(arr);
