a, b, c = map(int, input().split())

if a + b + c >= 100:
    print('OK')
else:
    arr = [a, b, c]
    lowest = min(arr)
    if arr.index(lowest) == 0:
        print('Soongsil')
    elif arr.index(lowest) == 1:
        print('Korea')
    else:
        print('Hanyang')