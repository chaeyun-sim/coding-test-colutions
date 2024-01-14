/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...testcases] = input;

function solution(n, testcases) {
  for (let i = 0; i < n; i += 1) {
    let count = 1;
    let target = Number(testcases[i * 2].split(' ')[1]);
    const queue = testcases[i * 2 + 1].split(' ').map(Number);

    while (true) {
      const shiftItem = queue.shift();
      if (Math.max(...queue) <= shiftItem) {
        if (!target) {
          console.log(count);
          break;
        } else {
          count += 1;
          target -= 1;
        }
      } else if (Math.max(...queue) > shiftItem) {
        queue.push(shiftItem);

        if (!target) {
          target = queue.length - 1;
        } else {
          queue.push(shiftItem);
          target -= 1;
        }
      }
    }
  }
}

solution(n, testcases);
