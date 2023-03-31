n = int(input())
lst = input().split()
lst.sort()
new_lst = [int(i) for i in lst]
print(min(new_lst), max(new_lst))