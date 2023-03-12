n = int(input())
numbers = map(int, input().split())

result = 0
for i in numbers:
    total = 0
    if i > 1 :
        for j in range(2, i):
            if i % j == 0:
                total += 1
        if total == 0:
            result += 1
print(result)