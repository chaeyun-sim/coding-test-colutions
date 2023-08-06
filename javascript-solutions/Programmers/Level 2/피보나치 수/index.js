function solution(n) {
  let first = 0;
  let second = 1;

  for (let i = 1; i < n; i++) {
    const sum = (first + second) % 1234567;
    first = second;
    second = sum;
  }
  return second;
}
