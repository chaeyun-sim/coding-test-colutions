function solution(k, tangerine) {
  let nums = {};

  for (let t of tangerine) !nums[t] ? (nums[t] = 1) : (nums[t] += 1);
  const sorted = Object.values(nums).sort((a, b) => b - a);

  let all = k;
  for (let i = 0; i < sorted.length; i++) {
    all -= sorted[i];

    if (all <= 0) return i + 1;
  }
}
