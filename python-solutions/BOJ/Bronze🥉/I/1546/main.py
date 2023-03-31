n = int(input())
score = [int(i) for i in input().split()]

if len(score) != n:
    exit()

score.sort()

new_score = []
max = score[-1]
for i in score:
    new_score.append(i / max * 100)

print(sum(new_score) / len(new_score))