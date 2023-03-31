for _ in range(3):
    total = 0
    n = int(input())
    result = [int(input()) for i in range(n)]
    
    if sum(result) == 0:
        print(0)
    elif sum(result) > 0:
        print('+')
    else:
        print('-')


# 위 코드는 시간초과 에러가 발생함
import sys
input = sys.stdin.readline
# 을 처음에 추가해야함