n, length = map(int, input().split())
for _ in range(n):
    boong = input()

    if length != len(boong) :
        break
    result = ""
    for i in range(1, length + 1):
        result += boong[-i]
    print(result)