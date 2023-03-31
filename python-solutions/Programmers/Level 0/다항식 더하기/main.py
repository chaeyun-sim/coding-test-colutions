def solution(polynomial):
    formula = [i for i in polynomial.split(' + ')]  # + 를 제외한 나머지 값을 formula 변수에 저장
    
    constant = 0
    xs = 0
    for i in formula:
        if 'x' in i:     # 값에 x가 있다면,
            if len(i) > 1:
                xs += int(i[0:-1])  # x의 계수를 xs에 추가해라
            elif len(i) == 1:  # 총 길이가 1이라면 (즉 x만 있다면)
                xs += 1   # 1을 xs에 추가하라 (x 앞에 계수가 표시되지 않았다면 1이 생략된 것이다)
        else:
            constant += int(i)  # 값에 x가 없다면 상수값을 변수에 추가해라

    if constant == 0:
        if xs == 0:    # 만약 상수값과 x의 계수 둘 다 0 일때 -> 0 출력
            answer = "0"
        elif xs == 1:  # 만약 상수값은 0이고 x의 계수는 1일때 -> 1x, 즉 x를 출력
            answer = "x"
        else:          # 만약 상수값은 0이고 x의 계수는 있을때 -> x의 값을 출력
            answer = f"{xs}x"
    else:
        if xs == 0:    # 만약 x의 값이 0 이고 상수값은 있을 때 -> 상수값만 출력
            answer = f"{constant}"
        elif xs == 1:  # 만약 x의 값이 1 이고 상수값은 있을 때 -> 1x, 즉 x와 상수값을 출력
            answer = f"x + {constant}"
        else:          # 만약 x의 값이 있고 상수값도 있을 때 -> x의 값과 상수의 값을 출력
            answer = f"{xs}x + {constant}"
    return answer  # 답을 int 타입으로 넘겨주면 오류 발생함



## isdigit() 으로 숫자를 판별하는 풀이도 있다
def solution(polynomial):
    for c in polynomial.split(' + '):
            if c.isdigit():
                const+=int(c)
            ...