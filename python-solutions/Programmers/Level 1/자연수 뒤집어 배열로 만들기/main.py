def solution(n):
    return [int(i) for i in str(n)[::-1]]



# map을 사용한 풀이
def digit_reverse(n):
    return list(map(int, reversed(str(n))))