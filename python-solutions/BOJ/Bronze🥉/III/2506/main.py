n = int(input())
scores = [int(i) for i in input().split()]
if len(scores) != n: exit()

total = 0
result = []
for i in range(len(scores)):
    if scores[i] == 1:
        total += 1
    elif scores[i] == 0:
        total = 0
    result.append(total)
print(sum(result))