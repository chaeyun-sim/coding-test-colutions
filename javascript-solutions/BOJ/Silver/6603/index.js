const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)

let arr = new Array(n).fill().map((_, i) => i + 1)
let selected = [];

function dfs(cnt) {
  if (cnt === m) {
    console.log(selected.join(' '))
    return;
  }

  for (let i = 0; i < n; i++) {
    selected.push(i + 1);
    dfs(selected.length);
    selected.pop();
  }
}

dfs(arr, 0)