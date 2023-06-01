const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

const arr = new Array(n).fill().map((_, i) => i + 1)
const visited = new Array(n).fill(false)
const selected = [];

function dfs(arr, depth) {
    if (depth === n) {
        let cnt = 1;
        console.log(selected.join(' '))
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true
        selected.push(i + 1)
        dfs(arr, depth + 1)
        selected.pop()
        visited[i] = false
    }
}

dfs(arr, 0);