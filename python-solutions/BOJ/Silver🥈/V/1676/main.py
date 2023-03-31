n = int(input())

total = 0
while True:
    n = n // 5
    total += n
    if n == 0: break
print(total)