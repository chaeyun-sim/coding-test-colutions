lst = []
result = 0
for _ in range(10):
    num = int(input())
    if num  % 42 not in lst:
        lst.append(num  % 42)
        result += 1
print(result)