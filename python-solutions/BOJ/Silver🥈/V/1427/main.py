n = input()
lst = sorted([int(i) for i in n], reverse=True)
print(''.join(map(str, lst)))