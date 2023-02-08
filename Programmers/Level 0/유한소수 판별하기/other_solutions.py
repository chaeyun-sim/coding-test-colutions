## 다른 풀이


## math 함수를 사용한 풀이
from math import gcd

def solution(a, b):
    b = b // gcd(a, b)
    
    while b % 2 == 0: b = b // 2
    while b % 5 == 0: b = b // 5
    return 1 if b == 1 else 2