n = int(input())
total = 0
for i in range(n):
    a = list(map(int, str(i)))   # 이렇게 해볼 생각을 한번도 안해봤는데 새롭다!

    if n == sum(a) + i:
        total = i
        break;
print(total)