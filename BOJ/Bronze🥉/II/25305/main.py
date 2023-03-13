N, k = map(int, input().split())
scores = sorted(list(map(int, input().split())), reverse=True)
if len(scores) != N: exit()
print(int(scores[k - 1]))