## 다른 풀이

## math을 사용한 풀이
from math import factorial

def solution(n):
    k = 10
    while n < factorial(k): # n 값이 팩토리얼 값보다 작을때까지 반복
        k -= 1
    return k

## 재귀함수를 사용한 풀이
def solution(n):
    if n < 2:
        return 1
    else:
        return n * factorial(n - 1)