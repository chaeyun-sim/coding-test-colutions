di = {'1': 1, '2': 1, '3': 1, '4': 1, '5': 1}
for i in range(1, 6):
    score = sum([int(i) for i in input().split()])
    di[f'{i}'] = score
    score = 0
di = sorted(di.items(), key=lambda x: x[1], reverse=True)
print(di[0][0], di[0][1])