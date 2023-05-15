const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [];
const n = input[0];
for (let i = 1; i <= n; i++){
	arr.push(input[i])
}

arr.sort((a, b) => a - b);
for (let m of arr) {
	console.log(m)
}