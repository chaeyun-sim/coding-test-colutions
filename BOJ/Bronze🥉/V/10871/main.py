n, max = map(int, input().split())
number_set = list(input().split())
if len(number_set) != n:
    exit()

result = ""
for i in number_set:
    if int(i) < max:
        result += i
        result += " "
print(result)