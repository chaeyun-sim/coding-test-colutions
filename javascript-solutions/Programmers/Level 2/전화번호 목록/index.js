function solution(phone_book) {
  const sorted = phone_book.sort();
  const result = sorted.some((el, idx, arr) => {
    if (arr[idx + 1]) {
      return arr[idx + 1].startsWith(el);
    }
  });
  return !result;
}
