const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let selected = []

function queen(x, y) {
    for (let [a, b] of selected) {
        if (a === x || b === y)return false;
        if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
}

let cnt = 0
function dfs(depth) {
    if (depth === n) {
        cnt += 1
    }
    
    for (let i = 0; i < n; i++) {
        if (!queen(depth, i)) continue
        selected.push([depth, i])
        dfs(depth + 1)
        selected.pop()
    }
}
dfs(0)
console.log(cnt)