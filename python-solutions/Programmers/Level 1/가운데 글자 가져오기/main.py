def solution(s):
    half = int(len(s) // 2)
    if len(s) % 2 == 0:
        return s[half - 1: half + 1]
    else:
        return s[half]
    


# 또 다른 풀이
def string_middle(str):
    return str[(len(str)-1)//2 : len(str)//2 + 1]


# 양수:음수 슬라이싱을 사용한 풀이
def string_middle(str):
    a = len(str)
    if a % 2 == 0: a = (a - 2) / 2
    else: a = (a - 1) / 2
    return str[int(a): -int(a)]