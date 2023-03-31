a, b, c, d = map(int, input().split())
w, x, y, z = map(int, input().split())
S = a + b + c + d
T = w + x + y + z

if S > T or S == T:
    print(S)
elif T > S:
    print(T)