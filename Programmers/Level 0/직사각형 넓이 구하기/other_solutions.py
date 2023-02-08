## 다른 풀이


## 사각형이 축에 평행하다는 이론을 사용
def solution(dots):
    return (max(dots)[0] - min(dots)[0])*(max(dots)[1] - min(dots)[1])