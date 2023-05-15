const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [];

for (let i = 1; i <= input[0]; i++) {
	const [x, y] = input[i].split(' ');
	arr.push([x, y]);
}

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

console.log(arr.map(el => el.join(' ')).join('\n'))