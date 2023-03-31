total = 0
result = []
for i in range(10):
    a, b = map(int, input().split())
    if i == 0: total += b
    elif i == 9: total -= a
    else: total = (total - a) + b
    result.append(total)
print(max(result))
    