function solution(data, col, row_begin, row_end) {
	data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

	const arr = [];
	for (let i = row_begin - 1; i < row_end; i++) {
		let cnt = 0;

		for (let j = 0; j < data[0].length; j++) {
			cnt += data[i][j] % (i + 1);
		}

		arr.push(cnt);
	}
	return arr.reduce((a, b) => a ^ b);
}



// 이렇게 한 줄로 만들수도 있다!

 return data
		.map((row, i) => row.reduce((acc, col) => acc + (col % (i + 1)), 0))
		.slice(row_begin - 1, row_end)
		.reduce((acc, val) => acc ^ val, 0);