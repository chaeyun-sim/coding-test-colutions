def solution(num_list, n):
    answer = []
    for i in range(0, len(num_list), n):
        answer.append(num_list[i: i + n])
    return answer


# 상위 코드를 list comprehension을 사용하여 한 줄로 만들 수도 있음
def solution(num_list, n):
    return [num_list[i : i + n] for i in range(0, len(num_list), n)]