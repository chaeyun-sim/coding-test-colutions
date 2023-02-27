N = int(input())

total = [int(input()) for i in range(N)]
if sum(total) > N // 2: print('Junhee is cute!')
else: print('Junhee is not cute!')