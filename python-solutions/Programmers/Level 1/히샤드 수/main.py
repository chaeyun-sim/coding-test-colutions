def solution(x):
    total = 0
    for i in str(x):
        total += int(i)
    return True if x % total == 0 else False


# 줄이면 이렇게 된다 (내 코드)
def solution(x):
    return True if x % sum([int(i) for i in str(x)]) == 0 else False