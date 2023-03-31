n = int(input())

for i in range(1, n + 1):
    print(" " * (n - i) + ("*" * i))
for i in range(n - 1, -1, -1):
    if i == 0: break
    print(" " * (n - i) + ("*" * i))