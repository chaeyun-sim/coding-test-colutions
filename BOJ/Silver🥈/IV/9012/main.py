n = int(input())

for i in range(n):
    vps = input()
    lst = list(vps)
    total = 0
    for i in lst:
        if i == '(':
            total += 1
        elif i == ')':
            total -= 1
        if total < 0:
            print('NO')
            break
    if total > 0:
        print('NO')
    elif total == 0:
        print('YES')