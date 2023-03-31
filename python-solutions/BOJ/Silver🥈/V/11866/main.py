n, k = map(int, input().split())

lst = [int(i) for i in range(1, n + 1)]

answer = ''
num = 0

for i in range(n):
    num += (k - 1)
    if num >= len(lst):
        num = num % len(lst)
    answer += str(lst[num])
    
    if i != (n - 1): answer += ', '
    lst.pop(num)
print(f"<{answer}>")