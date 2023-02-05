A = int(input())
B = int(input())
C = int(input())
D = int(input())
E = int(input())
F = int(input())

science = [A, B, C, D]
science.sort()
social = [E, F]

result = 0
for i in range(1, len(science)):
    result += science[i]
print(result + max(social))