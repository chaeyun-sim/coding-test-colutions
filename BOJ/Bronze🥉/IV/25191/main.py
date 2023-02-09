n = int(input())
a, b = map(int, input().split())

result = (a // 2)  + b
print(n) if result > n else print(result)