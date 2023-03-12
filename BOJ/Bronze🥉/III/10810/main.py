N, M = map(int, input().split())
di = {}

for i in range(1, N + 1):
    di[i] = 0

for _ in range(M):
    a, b, n = map(int, input().split())
    for i in range(a, b + 1):
        di[i] = n

print(' '.join(str(i) for i in list(di.values())))
