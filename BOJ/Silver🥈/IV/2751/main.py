import sys
n = int(sys.stdin.readline())
nums = [int(sys.stdin.readline()) for _ in range(n)]
nums = list(set(nums))
nums.sort()
for i in nums: print(i)


# nums.sort() -> sorted(list(set(nums)))