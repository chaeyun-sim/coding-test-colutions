N, K = map(int, input().split())
result = [i for i in range(1, N + 1) if N % i == 0]
result.sort()
try:
  print(result[K - 1])
except:
  print(0)