function solution(s) {
  let arr = [];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);

    let sameX = arr.filter((el) => el === arr[0]).length;
    let notSame = arr.filter((el) => el !== arr[0]).length;

    if (sameX === notSame) {
      result.push(s.slice(0, i + 1));
      arr = [];
    }
  }
  return result[result.length - 1] !== s ? result.length + 1 : result.length;
}
