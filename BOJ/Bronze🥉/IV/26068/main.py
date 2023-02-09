n = int(input())

total = 0
for _ in range(n):
    days = input().split('-')[1]
    if int(days) <= 90:
        total += 1

print(total)