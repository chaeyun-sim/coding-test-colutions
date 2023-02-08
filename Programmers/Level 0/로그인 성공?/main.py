def solution(dots):
    x = [dots[i][0] for i in range(len(dots))]  # x 좌표의 값들만 가져와서 중복을 제거한다.
    y = [dots[i][1] for i in range(len(dots))]  # y 좌표의 값들만 가져와서 중복을 제거한다.
    x = list(set(x))
    y = list(set(y))
    return (max(x) - min(x)) * (max(y) - min(y)) 
    # 가장 큰 x좌표에서 가장 작은 x좌표를 빼서 x의 길이를 구한다.
    # 가장 큰 y좌표에서 가장 작은 y좌표를 빼서 y의 길이를 구한다.



# 다른 풀이
def solution(id_pw, db):
    if db_pw := dict(db).get(id_pw[0]):
        return "login" if db_pw == id_pw[1] else "wrong pw"
    return "fail"


# 다른 풀이 설명 추가
# := -> 파이썬 3.8 새로운 기능인 "바다코끼리 연산자"

# 일반적인 코드
greet = 'hi'
if 'h' in greet:
    print(greet)

# 바다코끼리 연산자를 사용한 코드
if 'h' in (greet := 'hi'):
    print(greet)