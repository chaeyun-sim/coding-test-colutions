/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const neverHeard = input.slice(1, N + 1);
const neverSeen = input.slice(N + 1);
const obj = {};
neverHeard.forEach(name => (obj[name] = 1));
neverSeen.forEach(name => (obj[name] = (obj[name] || 0) + 1));
const filtered = Object.keys(obj).filter(name => obj[name] > 1);
console.log(filtered.length);
console.log(filtered.sort().join('\n'));
