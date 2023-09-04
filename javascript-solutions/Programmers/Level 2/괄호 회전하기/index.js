function solution(s) {
  let tmp = s;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    let stack = [];
    for (let j = 0; j < s.length; j++) {
      stack.push(tmp[j]);

      let test = stack.slice(stack.length - 2).join("");
      if (stack.length >= 2 && (test == "[]" || test == "()" || test == "{}")) {
        stack.pop();
        stack.pop();
      }
    }
    if (stack.length === 0) cnt++;

    let first = [...tmp][0];
    tmp = tmp.slice(1) + first;
  }
  return cnt;
}
