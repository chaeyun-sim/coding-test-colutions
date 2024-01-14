/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [t, ...arr] = input;
t = Number(t);

for (let i = 1; i < arr.length; i += 2) {
  const k = Number(arr[i - 1]);
  const n = Number(arr[i]);
  const apartment = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  apartment[0].forEach((_, i) => (apartment[0][i] = i));

  for (let floor = 1; floor <= k; floor += 1) {
    for (let house = 1; house <= n; house += 1) {
      apartment[floor][house] = apartment[floor - 1][house] + apartment[floor][house - 1];
    }
  }

  console.log(apartment[k][n]);
}
