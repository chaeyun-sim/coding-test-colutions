n = int(input())

for _ in range(n):
  h, w, n = map(int, input().split())
  room = n // h + 1
  floor = n % h
  if floor == 0:
    room = n // h
    floor = h
  print(floor * 100 + room)