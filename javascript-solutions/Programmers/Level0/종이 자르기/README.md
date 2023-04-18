# 종이 자르기

| 메모리 성능 | 시간 | 정확성 |
| ---- | ---- | ---- |
| 33.5MB | 0.02ms | 100.0 |

<br />

## 문제

머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

![](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/37cec804-18c5-4c58-95fc-37b4d52e6e7f/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202022-07-25%20%EC%98%A4%ED%9B%84%204.49.44.png)

정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.


<br />

## 제한 사항
0 < M, N < 100

종이를 겹쳐서 자를 수 없습니다.