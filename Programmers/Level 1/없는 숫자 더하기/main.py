def solution(numbers):
    return sum([i for i in range(1, 10) if i not in numbers])



# 1부터 10까지 더한 값에서 numbers의 값을 빼면 답이 바로 나온다...!
def solution(numbers):
    return 45 - sum(numbers)


# lambda 를 사용한 풀이
def solution(numbers):
    return lambda x: sum(range(10)) - sum(x)