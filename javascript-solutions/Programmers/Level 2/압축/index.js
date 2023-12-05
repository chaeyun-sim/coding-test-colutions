// 다음에 다시 할 것 (시간 복잡도 높음 및 어려움)

function solution(msg) {
  const obj = {};
  const arr = new Array(26).fill(0).map((_, i) => i + 1);
  arr.map(item => (obj[String.fromCharCode(item + 64)] = item));

  const result = [];
  let last = 27;

  const s = msg.split('').reduce((w, c) => {
    if (obj[w + c]) {
      return w + c;
    }

    result.push(obj[w]);
    obj[w + c] = last++;
    return c;
  });

  result.push(obj[s]);

  return result;
}
