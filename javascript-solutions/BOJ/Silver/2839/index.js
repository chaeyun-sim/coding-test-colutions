const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(input[0])

let cnt = 0;

while (1) {
  if (n < 0) {
    console.log(-1);
    return;
  }
  
  if (n % 5 === 0) {
    console.log(n / 5 + cnt);
    return;
  }

  cnt++;
  n -= 3;
}