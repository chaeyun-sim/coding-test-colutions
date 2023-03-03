def solution(s):
    p = 0
    y = 0
    for letter in s.lower():
        if letter == 'p': p += 1
        elif letter == 'y': y += 1
    return True if p == y else False



# count를 사용한 풀이
def solution(s):
    return s.lower().count('p') == s.lower().count('y')
    # lambda를 사용할 수도 있다
    # return lambda s: (S: = s.lower()).count("p") == S.count("y")


# collections 모듈을 사용한 풀이
from collections import Counter
def solution(s):
    c = Counter(s.lower())
    return c['y'] == c['p']