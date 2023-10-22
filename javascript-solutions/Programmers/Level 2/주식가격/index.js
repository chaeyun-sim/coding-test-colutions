function solution(prices) {
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    let cnt = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        cnt++;
      } else if (prices[i] > prices[j]) {
        cnt++;
        break;
      }
    }
    stack.push(cnt);
  }
  return stack;
}
