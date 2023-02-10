def solution(num, total):
    median = total // num
    return [i for i in range(median - (num - 1) // 2, median + (num + 2) // 2)]



# 다른 방법
def solution(num, total):
    return [(total - (num * (num - 1) // 2)) // num + i for i in range(num)]