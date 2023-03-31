n = int(input())
people = [int(i) for i in input().split()]

total = 0
for i in people:
    if i > n:
        total += n
    else:
        total += i
print(total)