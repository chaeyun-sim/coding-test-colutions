N = int(input())
lst = set(map(int, input().split()))
M = int(input())
arr = list(map(int, input().split()))

for i in arr:
    print(1) if i in lst else print(0)