def solution(t, p):
    result = []
    answer = ""
    for i in range(len(t) - len(p) + 1):
        for j in range(len(p)):
            answer += t[i + j]
        if int(answer) <= int(p): result.append(answer)
        answer = ""
    return len(result)




# 슬라이싱을 사용한 다른 풀이
def solution(t, p):
    answer = 0

    for i in range(len(t) - len(p) + 1):
        if int(p) >= int(t[i: i + len(p)]):
            answer += 1
    return answer