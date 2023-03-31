for i in range(1, 1000001):
    n0 = int(input())
    if n0 == 0: break
    n1 = 3 * n0
    if n1 % 2 == 0:
        n2 = round(n1 / 2)
        result = "even"
    else:
        n2 = round((n1 + 1) / 2)
        result = "odd"
    n3 = n2 * 3
    n4 = n3 // 9

    print(f"{i}. {result} {n4}")