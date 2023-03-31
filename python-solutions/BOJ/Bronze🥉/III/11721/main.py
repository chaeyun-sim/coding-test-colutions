n = [letter for letter in input()]

if len(n) % 10 == 0: max_range = len(n) // 10
else: max_range = len(n) // 10 + 1

for i in range(0, max_range):
  result = n[i * 10 : i * 10 + 10]
  print(''.join(result))