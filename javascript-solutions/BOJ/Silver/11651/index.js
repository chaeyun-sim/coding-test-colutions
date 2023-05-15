const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0]
const arr = [];

for (let i = 1; i <= n; i++) {
	const [x, y] = input[i].split(' ');
	arr.push([x, y]);
}

arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

console.log(arr.map(el => el.join(' ')).join('\n'));