/** @format */

// 2번의 시간초과와 3번의 메모리초과를 거쳐 성공한 풀이!

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const names = input.slice(1, n + 1);
const quiz = input.slice(m * -1);
const startWithName = new Map();
const startWithNumber = new Map();

names.forEach((name, idx) => {
  startWithName.set(name, idx + 1);
  startWithNumber.set(idx + 1, name);
});

quiz.forEach(item => {
  if (isNaN(item)) {
    console.log(startWithName.get(item));
  } else {
    console.log(startWithNumber.get(Number(item)));
  }
});
