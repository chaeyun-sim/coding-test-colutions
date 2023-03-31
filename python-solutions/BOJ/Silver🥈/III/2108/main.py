import sys
input = sys.stdin.readline

n = int(input())
lst = [int(input()) for _ in range(n)]

lst.sort()
print(round(sum(lst)/n))
print(lst[(n-1)//2])

di = {}
for i in range(n):
    if lst[i] not in di.keys():
        di[lst[i]] = 1
    else:
        di[lst[i]] += 1
di = sorted(di.items(), key = lambda x:(-x[1], x[0]))
for i in range(len(di)):
    di[i] = list(di[i])
if len(di) == 1 or di[0][1] != di[1][1]:
    print(di[0][0])
else:
    print(di[1][0])

print(max(lst) - min(lst))