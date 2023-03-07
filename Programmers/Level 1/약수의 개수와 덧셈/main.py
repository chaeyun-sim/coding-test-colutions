def solution(left, right):
    total = 0
    for i in range(left, right + 1):
        result = [i for j in range(1, i + 1) if i % j == 0]
        if len(result) % 2 == 0:
            total += i
        else: total -= i
        result = []
    return total


# 제곱근을 사용한 풀이 (대박!)
def solution(left, right):
    answer = 0
    for i in range(left, right + 1):
        if int(i ** (1 / 2)) == i ** (1 / 2):
            answer -= i
        else:
            answer += i
    return answer