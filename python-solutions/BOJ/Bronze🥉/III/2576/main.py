n = [int(input()) for _ in range(7)]

total = 0
result = []
for i in n:
    if i % 2 != 0:
        total += i
        result.append(i)
if total == 0:
    print(-1)
else:
  print(total)
  print(min(result))