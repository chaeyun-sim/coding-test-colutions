def solution(num):
    return 'Even' if num % 2 == 0 else 'Odd'



# 또 다른 풀이
def evenOrOdd(num):
    return ["Even", "Odd"][num & 1]