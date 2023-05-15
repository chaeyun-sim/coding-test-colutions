const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
	arr.push([input[i].split(' ')[0], input[i].split(' ')[1], i]);
}
arr.sort((a, b) => a[0] - b[0] || a[2] - b[2]);  // a - b만 해도 된다. (이미 인덱스로 정렬되어있기 떄문에)
console.log(arr.map(el => `${el[0]} ${el[1]}`).join('\n'));