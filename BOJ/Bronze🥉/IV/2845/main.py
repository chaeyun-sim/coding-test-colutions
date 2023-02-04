a, b = map(int, input().split())
newspapers = [int(i) for i in list(input().split())]
people = a * b
result = ""
for i in newspapers:
    result += str(i - people)
    result += " "
print(result)