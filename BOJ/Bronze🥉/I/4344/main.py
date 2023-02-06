n = int(input())

for _ in range(n):
    a = [int(i) for i in input().split()]
    if int(a[0] + 1) != len(a):
        break

    length = int(a[0])

    total = 0
    average = sum(a[1:]) / a[0]
    for i in a[1:]:
        if int(i) > average:
            total += 1
    print(f'{(total / a[0] *100):.3f}%')