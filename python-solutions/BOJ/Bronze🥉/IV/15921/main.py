N = int(input())

if N == 0:
    print('divide by zero')
    exit()
else:
    record = [int(i) for i in input().split()]
    score = sum(record) / N
    answer = score / score
    if answer == 0:
        print('divide by zero')
        exit()

print("%.2f" % answer)