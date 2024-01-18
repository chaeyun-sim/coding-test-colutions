/** @format */

// 첫번째 시도 -> 런타임 에러 (타입 에러)

const arr = input[1];
const testCases = input.slice(2);

testCases.forEach(t => {
  let total = 0;
  const [start, end] = t;

  for (let i = start - 1; i < end; i++) {
    total += arr[i];
  }
  console.log(total);
});

// 2~6번째 시도 -> 시간 초과
const numbers = input[1].split(' ').map(Number);
const testCases = input.slice(2).map(el => el.split(' ').map(Number));
const sum = new Array(numbers.length + 1).fill(0);

numbers.forEach((item, idx) => {
  sum[idx + 1] = sum[idx] + item;
});

testCases.forEach(t => {
  const [start, end] = t;
  console.log(sum[end] - sum[start - 1]);
});

// 7번째 시도 -> 정답
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);
const testCases = input.slice(2).map(el => el.split(' ').map(Number));
const sum = new Array(numbers.length + 1).fill(0);
const result = [];

numbers.forEach((item, idx) => {
  sum[idx + 1] = sum[idx] + item;
});

testCases.forEach(t => {
  const [start, end] = t;
  result.push(sum[end] - sum[start - 1]);
});

console.log(result.join('\n'));

// forEach 내에서 console.log하는 거랑 forEach 밖에서 console.log하는게 뭐가 다른건지 아직은 잘 모르겠다.
