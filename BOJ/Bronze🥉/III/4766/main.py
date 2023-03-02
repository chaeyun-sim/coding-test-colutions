result = []
while True:
    a = float(input())
    if a == 999: break

    result.append(a)
    if len(result) > 1: print(format(result[-1] - result[-2], ".2f"))