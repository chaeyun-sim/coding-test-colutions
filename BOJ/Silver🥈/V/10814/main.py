import sys

n = int(sys.stdin.readline())
lst = []

for i in range(n):
    age, name = sys.stdin.readline().split()
    age = int(age)
    lst.append((age, name))
lst.sort(key = lambda x : x[0])
for age, number in lst: print(age, number)