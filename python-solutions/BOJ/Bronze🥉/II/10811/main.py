N, M = map(int, input().split())

lst = [i for i in range(1, N + 1)]

for _ in range(M):
    a, b = map(int, input().split())

    lst = lst[:a-1] + lst[a-1:b][::-1] + lst[b:]
    # print(lst)
print(' '.join(map(str, lst)))