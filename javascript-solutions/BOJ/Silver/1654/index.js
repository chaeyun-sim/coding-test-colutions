const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [k, n] = input[0].split(' ').map(Number)
const arr = []

for (let i = 1; i <= k; i++) {
	arr.push(Number(input[i]))
}

let start = 1
let end = Math.max(...arr)

while (start <= end) {
    const mid = Math.floor((start + end ) / 2)
    
    let sum = arr.map(el => Math.floor(el / mid)).reduce((a, b) => a + b)
		// mid가 작아야 얻을 수 있는 랜선의 수가 많아진다.
		// 가지고 있는 각 랜선을 잘라서 길이가 mid인 랜선을 몇개 자를 수 있는지
    
    if (sum >= n) {
        start = mid + 1  // 랜선의 개수가 많을 경우 길이 늘이기
    } else {
        end = mid - 1  // 랜선의 개수가 부족한 경우 길이 줄이기
    }
}

console.log(end)