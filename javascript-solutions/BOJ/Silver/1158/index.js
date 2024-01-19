/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
let arr = Array.from({ length: n })
  .fill(0)
  .map((_, i) => i + 1);
let currentIndex = 0;
const stack = [];

while (arr.length) {
  for (let i = 0; i < k - 1; i++) {
    if (currentIndex >= arr.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }
  stack.push(arr[currentIndex]);
  arr = arr.filter((_, i) => i !== currentIndex);
  if (currentIndex > arr.length - 1) {
    currentIndex = 0;
  }
}

console.log(`<${stack.join(', ')}>`);
