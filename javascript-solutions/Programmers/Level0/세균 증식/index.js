function solution(n, t) {
    return n * (2 ** t)
}


// 쉬프트를 사용한 풀이
function solution(n, t) {
    return n << t;
}


// 쉬프트
// 첫번째 피 연산자를 명시한 비트 수만큼 왼쪽으로 이동함
// 즉, x << y 일때 x를 온쪽으로 y단위로 이동하면 x * 2 ** y이다. (내가 푼 것과 같음))
// 예를 들어 9 << 3 이면 9 * (2 ** 3)