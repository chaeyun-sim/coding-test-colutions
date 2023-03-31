x, y, w, h = map(int, input().split())
result = min(x, y, abs(x-w), abs(y-h))
print(result)