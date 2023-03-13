import sys

n = int(sys.stdin.readline())

lst = []
for _ in range(n):
    a, b = map(int, sys.stdin.readline().split())
    lst.append([a, b])

lst.sort()
for i in lst: print(f"{i[0]} {i[1]}")