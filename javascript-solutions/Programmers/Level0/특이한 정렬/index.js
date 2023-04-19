function solution(numlist, n) {
    const result = [];
    const arr = numlist.map(el => [el, Math.abs(el - n)]);
    arr.sort((a, b) => a[1] - b[1] || b[0] - a[0]).map(el => result.push(el[0]))
    return result
}



// 헐... 더 단축 시킨 코드가 있다
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
// Math.abs(el - n) 과 sortdml a - b b - a를 축약해놓은 듯한 코드

