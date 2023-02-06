a, b = map(int, input().split())
c, d = map(int, input().split())

if b + c > d + a:
    print(d + a)
else:
    print(b + c)