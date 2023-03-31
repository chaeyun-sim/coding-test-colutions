import math
a, b, v = map(int, input().split())

# 하루 : a - b
# 마지막 날에 안 미끄러진다면 v - b
result = (v - b) / (a - b)
if result == int(result): print(int(result))
else: print(int(result) + 1)