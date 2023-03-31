n = int(input())

lst = list(set([input() for _ in range(n)]))
lst.sort()
lst.sort(key=lambda x: len(x))
for i in lst: print(i)