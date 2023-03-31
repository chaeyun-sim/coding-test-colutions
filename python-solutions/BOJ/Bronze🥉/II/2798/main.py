n, m = map(int, input().split())
cards = [int(i) for i in input().split()]

if len(cards) != n:
    exit()

result = []
for i in range(len(cards)):
    for j in range(i + 1, n):
        for k in range(i + 2, n):
            if j != k:
                sets = [cards[i], cards[j], cards[k]]
                if sum(sets) <= m:
                    result.append(sum(sets))
print(max(result))



# 마지막에 m 보다 작은 수 중에 가장 큰 수를 판별하는 코드가 더 짧아질 수 있을 것 같다.
if cards[i] + cards[j] + cards[k] > m:
    continue
else:
    result = max(result, cards[i] + cards[j] + cards[k])



# itertools - permutations 를 사용하는 코드
from itertools import permutations

n, m = map(int, input().split())

num = list(map(int, input().split()))
permutationArray = permutations(num, 3)
ans = 0
for i in permutationArray:
    if(m+1 > sum(i)):
        ans = max(ans, sum(i))
    
print(ans)



# itertools - combinations 를 사용하는 코드

from itertools import combinations

N, M = map(int, input().split())
card_num = list(map(int, input().split()))
combi_sum = [sum(combi) for combi in combinations(card_num, 3) if sum(combi) <= M]

print(max(combi_sum))