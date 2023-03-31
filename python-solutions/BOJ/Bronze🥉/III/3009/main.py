x = []
y = []

for _ in range(3):
    a, b = map(int, input().split())
    x.append(a)
    y.append(b)

a = [i for i in x if x.count(i) == 1][0]
b = [i for i in x if y.count(i) == 1][0]

print(a, b)



# 다른 풀이
x = []
y = []

for _ in range(3):
    a, b = map(int, input().split())
    if a in x: x.remove(a)
    else: x.append(a)

    if b in y: y.remove(b)
    else: y.append(b)

print(x[0], y[0])