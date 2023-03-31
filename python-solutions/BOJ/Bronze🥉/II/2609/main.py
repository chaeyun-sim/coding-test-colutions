# import math

# a, b = map(int, input().split())

# print(math.gcd(a, b))
# print(math.lcm(a, b))

a, b, v = map(int, input().split())

res = (v-b)/(a-b)
print(res)