sets = [[int(i) for i in input().split()] for _ in range(9)]
di = {}
for i in range(0, len(sets)):
    di[max(sets[i])] = [i + 1, sets[i].index(max(sets[i])) + 1]
di = sorted(di.items(), key=lambda x: x[0], reverse=True)
print(di[0][0])
print(di[0][1][0], di[0][1][1])




# 90의 x와 y를 도출해내는 부분 다른 풀이
xpos = 0
ypos = 0
maxnum = 0

for i in range(9):
    if maxnum < max(sets[i]) :
        maxnum = max(sets[i])
        ypos = i
        xpos = sets[i].index(maxnum)