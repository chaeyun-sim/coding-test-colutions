def solution(n):
    return sum([int(i) for i in str(n)])




# 와... 재귀구조를 사용한 풀이
def sum_digit(number):
    '''number의 각 자릿수를 더해서 return하세요'''
    if number < 10:
        return number

    return number%10 + sum_digit(number//10)



# map을 사용한 풀이
def sum_digit(number):
    return sum(map(int, str(number)))