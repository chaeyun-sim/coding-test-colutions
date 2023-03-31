function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            answer += i
        }
    }
    return answer
}


// Math.floor로 푸는 방법 (수열)
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1)
}