a, b = input().split()

new_b = ''
new_a = ''
for i in range(1, 4):
    new_a += a[-i]
    new_b += b[-i]

if int(new_a) > int(new_b):
    print(new_a)
elif int(new_b) > int(new_a):
    print(new_b)