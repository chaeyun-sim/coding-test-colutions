# 틀렸다고 나오는데 왜 틀린지 전혀 모르겠다..

n = input()

if len(n) % 2 == 0:
    center = int(len(n) / 2)
else:
    center = round(len(n) / 2)

print(int(n[:center]) + int(n[center:]))