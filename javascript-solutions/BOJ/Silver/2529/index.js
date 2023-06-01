const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const lst = input[1].split(' ')
let arr = [[0, n], [9 - n, 9]]
let visited = new Array(10).fill(false)
let selected = []

let answer = []
for (let nums of arr) {
    function dfs(depth) {
		if (depth == n + 1) {
		    let sel = selected.map((el, i) => {
		        if (lst[i] === '<') {
		            if (el >= selected[i + 1]) {
		                   return false
		            } else {
		                return true
		            }
		        } else if (lst[i] === '>') {
		            if (el <= selected[i + 1]) {
		                return false
		            } else {
		                return true
		            }
		        } else {
		            return true
		        }
		    })
		    if (sel.every(el => el === true)) {
		        answer.push(selected.join(''))
		    }
		}
	
		for (let i = nums[0]; i <= nums[1]; i++) {
			if (visited[i]) continue;
			selected.push(i)
			visited[i] = true
			dfs(depth + 1)
			visited[i] = false
			selected.pop()
		}
    }
    dfs(0)
}

answer.sort((a, b) => a[0] - b[0])
console.log(answer[answer.length - 1])
console.log(answer[0])