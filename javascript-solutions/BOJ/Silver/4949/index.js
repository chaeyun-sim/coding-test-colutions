/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];
input.slice(0, input.length - 1).forEach(str => {
  const stack = [];

  str.split('').forEach(item => {
    if (['(', ')', '[', ']'].includes(item)) {
      stack.push(item);

      if (['()', '[]'].includes(stack.slice(stack.length - 2).join(''))) {
        stack.pop();
        stack.pop();
      }
    }
  });
  result.push(!stack.length ? 'yes' : 'no');
});

console.log(result.join('\n'));
