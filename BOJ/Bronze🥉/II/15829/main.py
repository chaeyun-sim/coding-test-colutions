n = int(input())
s = input()
m = 1234567891

result = 0
for i in range(len(s)):
    result += (ord(s[i]) - 96) * 31 ** i
print(result % m)