A, B, C, D = map(int, input().split())

case_1 = abs((C + D) - (A + B))
case_2 = abs((D + B) - (A + C))
case_3 = abs((D + A) - (B + C))
results = [case_1, case_2, case_3]

print(min(results))