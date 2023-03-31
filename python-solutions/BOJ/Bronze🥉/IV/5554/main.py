import math

to_school = int(input())
to_pc = int(input())
to_academy = int(input())
to_home = int(input())

time = to_school + to_pc + to_academy + to_home

minutes = math.floor(time / 60)
seconds = time - minutes * 60
print(minutes)
print(seconds)