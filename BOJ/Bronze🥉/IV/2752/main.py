numbers = [int(i) for i in list(input().split())]
numbers.sort()
result = ""
for i in numbers:
    result += str(i)
    result += " "
print(result)