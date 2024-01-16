/** @format */

// 언어제한인지 모르고 풀었다.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1);
let S = [];

for (const text of arr) {
  const [command, x] = text.split(' ');
  const filtered = S.filter(el => el !== x);
  const checkInclude = S.includes(x);

  if (command === 'add') S = !checkInclude ? [...S, x] : S;
  else if (command === 'remove') S = checkInclude ? filtered : S;
  else if (command === 'check') console.log(checkInclude ? 1 : 0);
  else if (command === 'all') S = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
  else if (command === 'empty') S = [];
  else if (command === 'toggle') S = checkInclude ? filtered : [...S, x];
}
