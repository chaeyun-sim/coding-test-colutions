def solution(x, n):
    return [x * i for i in range(1, n+1)]



# 다른 풀이
def solution(x, n):
    return [i * x + x for i in range(n)]