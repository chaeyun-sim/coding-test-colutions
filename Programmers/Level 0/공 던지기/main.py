def solution(numbers, k):
    num = 0
    for _ in range(0, k - 1):
        num += 2
        if num > len(numbers) - 1:
            num -= len(numbers)
    return num + 1