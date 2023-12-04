// 테스트 6~9 시간 초과

function solution(files) {
  const newFiles = files.map((file, index) => {
    const splited = file.match(/\d+|\D+/g);
    return splited;
  });

  const sorted = newFiles.sort(
    (a, b) =>
      a[0].toLowerCase().charCodeAt(0) - b[0].toLowerCase().charCodeAt(0) ||
      Number(a[1]) - Number(b[1]) ||
      a[2] - b[2]
  );
  return sorted.map(item => item.join(''));
}

// 통과!
function solution(files) {
  const newFiles = files.map(file => {
    return file.match(/\d+|\D+/g);
  });

  const sorted = newFiles.sort((a, b) => {
    const firstCharA = a[0].toLowerCase();
    const firstCharB = b[0].toLowerCase();

    if (firstCharA < firstCharB) {
      return -1;
    } else if (firstCharA > firstCharB) {
      return 1;
    }
    return Number(a[1]) - Number(b[1]);
  });

  return sorted.map(el => el.join(''));
}

// 실패 이유는 charCodeAt(0)에 있다. 이미 lowercase를 적용한 상태이기 때문에 소문자끼리 비교하면 되는데, 특수문자도 있는 상황에서 굳이 ASCII 코드로 변환하면서 시간 초과가 발생되었다.
