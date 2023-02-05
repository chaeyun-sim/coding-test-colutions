today = input()
cars = input().split()

total = 0
for car in cars:
    if car == today or car[-1] == today:
        total += 1
print(total)