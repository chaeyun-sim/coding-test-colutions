n = int(input())
for _ in range(n):
    word = ""
    a, b = input().split()
    for letter in b:
        word += letter * int(a)
    print(word)