n = int(input())
lst = map(int, input().split())
num = int(input())

total = 0
for i in lst:
    if i == num:
        total += 1
print(total)