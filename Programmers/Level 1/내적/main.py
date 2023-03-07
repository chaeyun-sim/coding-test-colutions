def solution(a, b):
    return sum([a[i] * b[i] for i in range(len(a)) if len(a) == len(b)])



# zip을 사용하는 간단한 코드
def solution(a, b):
    return sum([x * y for x, y in zip(a, b)])