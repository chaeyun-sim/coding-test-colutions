/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [t, ...arr] = input;
arr = arr.map(el => el.split(' ').map(Number));

let rank = '';

arr.forEach(item => {
  const [weight, height] = item;
  const test = arr.filter(el => el[0] > weight && el[1] > height);
  rank += `${test.length + 1} `;
});

console.log(rank);
