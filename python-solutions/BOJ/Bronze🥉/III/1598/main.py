a, b = map(int, input().split())
a -= 1
b -= 1

row = abs(b % 4 - a % 4)
col = abs(b // 4 - a // 4)
print(row + col)