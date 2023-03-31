import math

def solution(n):
    x = math.sqrt(n)
    return (x + 1) ** 2 if int(x) == x else -1



# ** 1/2 를 사용한 풀이
def solution(n):
    sqrt = n ** (1/2)
    if sqrt % 1 == 0:
        return (sqrt + 1) ** 2
    return -1


# 정수인지 판별하는 방법 중에 is_integer() 도 있다.

# 또 다른 방법을 사용한 풀이
def solution(n):
    return n == int(n**.5)**2 and int(n**.5+1)**2 or 'no'