def solution(sides):
    total = 0
    for _ in range(abs(sides[0] - sides[1]) + 2, sides[0] + sides[1] + 1):
        total += 1
    return total



# 더 짧은 코드 1
def solution(sides):
    return sum(sides) - max(sides) + min(sides) - 1

# 더 짧은 코드 2
def solution(sides):
    return 2 * min(sides) - 1