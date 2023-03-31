import sys

K = int(sys.stdin.readline())

lst = []
for _ in range(K):
    num = int(sys.stdin.readline())
    lst.pop() if num == 0 else lst.append(num)
print(sum(lst))