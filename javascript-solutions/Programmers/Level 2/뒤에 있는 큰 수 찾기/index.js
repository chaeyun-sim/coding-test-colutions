// 20~23 실패

function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1;

    while (j < numbers.length) {
      if (numbers[i] < numbers[j]) {
        result[i] = numbers[j];
        break;
      }
      j++;
    }
  }

  return result;
}

// 성공!

function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] > numbers[stack.at(-1)]) {
      const idx = stack.pop();
      result[idx] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}

// chatGPT에 따르면,
// 실패한 코드는 시간 복자도가 O(N ** 2)로, 최악의 경우 모든 요소가 비교되어 시간 제한을 초과한다고 한다.
// 중첩 루프 방식은 큰 배열에 대해 매우 비효율적이지만, 스택 방식은 비교횟수가 적어져 효율적이다.
