function solution(n) {
  let i = 1;
  while (true) {
    let tmp = n + i;
    const N = [...n.toString(2)].filter((el) => el === "1");
    const M = [...tmp.toString(2)].filter((el) => el === "1");
    if (N.length === M.length) return tmp;
    i++;
  }
}

// 재귀함수를 사용한 방식
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
