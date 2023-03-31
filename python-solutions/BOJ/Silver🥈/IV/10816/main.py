n = int(input())
lst = sorted(list(map(int, input().split())))
m = int(input())
arr = list(map(int, input().split()))

di = {}
for i in lst:
    if i in di:
        di[i] += 1
    else:
      di[i] = 1 

for i in arr:
    if i in di:
      print(di[i], end=' ')
    else: print(0, end=" ")