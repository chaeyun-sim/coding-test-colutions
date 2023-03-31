N, M = map(int, input().split())

lst = [i for i in range(1, N + 1)]

for _ in range(M):
    i, j, k = map(int, input().split())
    i, j, k = i - 1, j - 1, k - 1

    lst = lst[:i] + lst[k : j + 1] + lst[i : k] + lst[j + 1:]
print(' '.join(map(str, lst)))