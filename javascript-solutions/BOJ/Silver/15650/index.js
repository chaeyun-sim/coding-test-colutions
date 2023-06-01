const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)

let arr = new Array(n).fill().map((_, i) => i + 1)
let visited = new Array(n).fill(false);
let selected = [];
let answer = []

function dfs(arr, depth) {
    if (depth === m) {
        answer.push(selected.join(' '))
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        selected.push(i + 1)
        visited[i] = true
        dfs(arr, depth + 1)
        visited[i] = false
        selected.pop()
    }
}

dfs(arr, 0)
let lst = answer.map(el => el.split(' ').map(Number).sort((a, b) => a - b).join(''))
lst = [...new Set(lst.map(Number))]
for (let i of lst) {
    console.log(String(i).split('').join(' '))
}