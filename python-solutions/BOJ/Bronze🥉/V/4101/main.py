while 0 < 1:
    a, b = map(int, input().split())

    if a == 0 and b == 0:
        break;

    if a < b or a == b:
        print('No')
    else:
        print('Yes')