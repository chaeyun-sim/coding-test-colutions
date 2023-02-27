total = 0
people = []
for i in range(1, 5):
    a, b = map(int, input().split())

    if i == 1: total += b
    elif i == 4: total -= a
    else: total = total - a + b
    people.append(total)
    
print(max(people))