def solution(n):
    return sum([i for i in range(1, n + 1) if n % i == 0])




# 값이 가장 큰 약수는 숫자의 절반보다 크지 않다....를 사용한 풀이
def sumDivisor(num):
    return num + sum([i for i in range(1, (num // 2) + 1) if num % i == 0])