def solution(quiz):
    answer = []
    for i in quiz:
        tmp = i.find("=")  # = 의 인덱스를 찾기
        if int(eval(i[:tmp])) == int(i[(tmp + 1):]):  # = 이전에 주어진 식과 = 이후에 주어진 값이 일치하는지 확인
            answer.append('O')
        else:
            answer.append('X')
    return answer


# 다른 방법
# = 를 == 로 바꾸고 eval 함수를 사용하는 방법이 있었다

def valid(equation):
    equation = equation.replace('=', '==')
    return eval(equation)

def solution(equations):
    return ["O" if valid(equation) else "X" for equation in equations]    