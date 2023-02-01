a = input().split()

total = 0
for i in a :
    total += (int(i) ** 2)
print(total % 10)