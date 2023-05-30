// 실패!

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const m = Number(input[2])
const arrN = input[1].split(' ').map(Number)
const arrM = input[3].split(' ').map(Number)

const di = new Object;

for (let i of arrM) {
    di[Number(i)] = 0
}

for (let j of arrN) {
    if (Object.keys(di).includes(`${j}`)) {
        di[j] += 1
    }
}

let result = ""
for (let k of arrM) {
    result += di[`${k}`] + " "
}

console.log(result)




// map으로 풀었더니 성공

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const m = Number(input[2])
const arrN = input[1].split(' ').map(Number)
const arrM = input[3].split(' ').map(Number)

const map = new Map();

for (let i of arrN) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
}

const answer = [];
for (let j of arrM) {
    answer.push(map.get(j) > 0 ? map.get(j) : 0)
}
console.log(answer.join(" "));