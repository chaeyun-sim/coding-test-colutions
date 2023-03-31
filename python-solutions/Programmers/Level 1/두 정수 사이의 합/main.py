def solution(a, b):
    if a == b:
        return a
    elif a > b:
        return sum([int(i) for i in range(b, a + 1)])
    else:
        return sum([int(i) for i in range(a, b + 1)])
    


# 더 간단한 풀이
def solution(a, b):
    if a > b:
        a, b = b, a
    return sum(range(a, b + 1))


# 절댓값을 사용한 풀이
def solution(a, b):
    return (abs(a - b) + 1) * (a + b) // 2


# min, max 사용하기
def solution(a, b):
    return sum(range(min(a, b), max(a, b) + 1))