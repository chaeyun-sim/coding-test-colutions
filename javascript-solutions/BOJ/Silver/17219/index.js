/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1).map(el => el.split(' '));
const quiz = input.slice(N + 1);
const map = new Map();

arr.forEach(item => {
  const [url, pw] = item;
  map.set(url, pw);
});

const result = quiz.map(item => map.get(item));
console.log(result.join('\n'));
