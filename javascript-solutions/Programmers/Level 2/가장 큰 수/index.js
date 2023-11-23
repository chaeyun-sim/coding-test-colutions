function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join('');
  return !Number(result[0]) ? '0' : result;
}
