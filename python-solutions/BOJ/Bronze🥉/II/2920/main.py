scale = input().split()
new_scale = [int(i) for i in scale]

if new_scale == sorted(new_scale):
    print("ascending")
elif new_scale == sorted(new_scale, reverse=True):
    print("descending")
else:
    print("mixed")