n = int(input())

ball = 1
for i in range(n):
    a, b = map(int, input().split())
    if i == 0:
        if a == 1: ball = b
        elif b == 1: ball = a
    else:
        if ball == a: ball = b
        elif ball == b: ball = a
print(ball)