N, M = map(int, input().split())

di = {}
for i in range(1, N + 1): di[i] = i

for _ in range(M):
    a, b = map(int, input().split())
    
    fixed = di[a]
    di[a] = di[b]
    di[b] = fixed

print(' '.join(map(str, list(di.values()))))