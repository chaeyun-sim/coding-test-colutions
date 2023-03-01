n = int(input())
A = 100
B = 100

for _ in range(n):
    a, b = map(int, input().split())
    if a > b:
        B -= a
    elif a < b:
        A -= b
    else:
        A += 0
        B += 0

print(f"{A}\n{B}")