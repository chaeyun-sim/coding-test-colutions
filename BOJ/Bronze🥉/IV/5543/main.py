high = int(input())
middle = int(input())
low = int(input())
coke = int(input())
cider = int(input())

burger_sets = []
for burger in [high, middle, low]:
    burger_sets.append(int(burger + coke - 50))
    burger_sets.append(int(burger + cider  - 50))
burger_sets.sort()
print(burger_sets[0])