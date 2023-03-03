def solution(n):
    total = 0
    for _ in range(n):
        total += 1
        while total % 3 == 0 or '3' in str(total):
            total += 1
    return total