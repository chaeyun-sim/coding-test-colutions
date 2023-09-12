function solution(n, a, b) {
  let cnt = 0;

  while (true) {
    if (a === b) return cnt;

    a = Math.round(a / 2);
    b = Math.round(b / 2);
    cnt++;
  }
}
