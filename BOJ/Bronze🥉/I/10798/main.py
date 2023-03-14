# import sys

# input = sys.stdin.readline()

length = []
arr = []
for _ in range(5):
    word = input()
    arr.append(word)
    length.append(len(word))

for i in range(len(arr)):
    if len(arr[i]) < max(length):
        arr[i] = arr[i] + ("*" * (max(length) - len(arr[i])))

result = ''
for i in range(max(length)):
    for j in range(5):
        if i < length[j]:
          result += arr[j][i]
print(result)