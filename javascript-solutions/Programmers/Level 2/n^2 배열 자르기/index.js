function solution(n, left, right) {
  const arr = new Array(right - left + 1).fill(0).map((_, i) => i + left);
  const result = arr.map(el => Math.max(parseInt(el / n), el % n) + 1);
  return result;
}

// el / n은 행 인덱스, el % n은 열 인덱스
