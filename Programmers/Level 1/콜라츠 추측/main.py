def solution(num):
    total = 0
    while num != 1:
        if num % 2 == 0:
            total += 1
            num = num // 2
        elif num % 2 != 0:
            total += 1
            num = num * 3 + 1

        if total > 500: return -1
    return total