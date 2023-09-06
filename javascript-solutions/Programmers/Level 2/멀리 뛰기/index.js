function solution(n) {
  let first = 1;
  let second = 1;

  for (let i = 0; i < n; i++) {
    let sum = (first + second) % 1234567;
    first = second;
    second = sum;
  }
  return first;
}

// Lev2의 피보나치 수와 비슷!