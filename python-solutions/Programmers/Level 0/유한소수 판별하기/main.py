def solution(a, b):
    result = [i for i in range(1, a + 1) if a % i == 0 and b % i == 0]
    # 이때 result에는 1과 최대공약수가 출력된다.
    c = b // max(result) # 분모에 최대공약수를 나눈 것을 c라고 정의

    # 소인수 분해
    while c % 2 == 0:
        c = c // 2
    while c % 5 == 0: 
        c = c // 5

    # 마지막에 출력된 c는 c를 2와 5로 나눈 나머지    

    if c == 1: # 만약 c가 1이라면, c가 가진 소인수가 2와 5뿐이라는 것. => 유한소수
        return 1
    else: # 1이 아니라면 => 무한소수
        return 2