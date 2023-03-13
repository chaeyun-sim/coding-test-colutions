import sys
 
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().split()))
arr = sorted(set(lst))

dictionary = {arr[i] : i for i in range(len(arr))}
 
for i in lst: print(dictionary[i], end = ' ')