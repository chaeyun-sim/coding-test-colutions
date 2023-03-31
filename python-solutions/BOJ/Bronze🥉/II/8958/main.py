n = int(input())

for _ in range(n):
    lst = input()

    result = 0
    zeros = 0
    for letter in lst:
        if letter == 'O':
            zeros += 1
            result += zeros
        else:
            zeros = 0
            result += zeros
    print(result)