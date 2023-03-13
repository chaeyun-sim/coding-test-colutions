import sys

n = int(sys.stdin.readline())

lst = []
for _ in range(n):
    a, b = map(int, sys.stdin.readline().split())
    lst.append([b, a])

lst.sort()
for i in lst: print(f"{i[1]} {i[0]}")