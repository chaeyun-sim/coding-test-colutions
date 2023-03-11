def solution(number):
    lst = []
    for i in range(len(number) - 2):
        for j in range(i + 1, len(number) - 1):
            for k in range(j + 1, len(number)):
                if number[i] + number[j] + number[k] == 0:
                    lst.append([number[1], number[j], number[k]])
    return len(lst)




# combinations 모듈을 사용한 기가 막힌 풀이
from itertools import combinations
def solution(number):
    num_combinations = [sum(comb) for comb in lst(combinations(number, 3)) if sum(comb) == 0]
    return len(num_combinations)