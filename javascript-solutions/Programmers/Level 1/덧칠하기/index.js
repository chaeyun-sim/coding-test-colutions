function solution(n, m, section) {
  let cnt = 0;
  let tmp = section[0] + m - 1;
  for (let i = 1; i < section.length; i++) {
    if (tmp < section[i]) {
      tmp = section[i] + m - 1;
      cnt++;
    }
  }
  return cnt + 1;
}

// 다른 사람 풀이
function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));

  section.forEach((el) => {
    arr[el] = 1;
  });

  section.forEach((el) => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });
  return count;
}