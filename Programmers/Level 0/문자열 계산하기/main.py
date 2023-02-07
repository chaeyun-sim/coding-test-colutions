def solution(my_string):
    return eval(my_string)  # 문자열로 되어있는 사칙연산을 값으로 반환함.


# 엄청난 풀이 발견!
solution = eval

# 일반적인 풀이
def solution(my_string):
    return sum(int(i) for i in my_string.replace(' - ', ' + -').split(' + '))
