total = int(input())
count = int(input())

money = 0
for _ in range(count):
    a, b = map(int, input().split())
    money += (a * b)

if money == total:
    print('Yes')
else:
    print('No')
