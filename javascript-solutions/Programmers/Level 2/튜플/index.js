function solution(s) {
  const arr = [];
  let tmp = s.slice(2, s.length - 2).split("},{");

  for (let t of tmp) {
    const tuple = t.split(",").map(Number);
    arr.push(tuple);
  }

  arr.sort((a, b) => a.length - b.length);

  let stack = [];
  for (let nums of arr) {
    for (let num of nums) {
      if (!stack.includes(num)) {
        stack.push(num);
      }
    }
  }
  return stack;
}
