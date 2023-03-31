n, k = map(int, input().split())
num1 = 1
num2 = 1
num3 = 1

for i in range(1, n + 1): num1 *= i
for i in range(1, (n - k) + 1): num2 *= i
for i in range(1, k + 1): num3 *= i

print(int(num1 / (num2 * num3)))

# 이항 계수는 n!/ (n-k)!k! 이다.