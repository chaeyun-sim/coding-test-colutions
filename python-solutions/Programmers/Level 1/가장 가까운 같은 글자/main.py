def solution(s):
    di = {}
    answer = []
    for index, i in enumerate(list(s)):
        if i not in di:
            answer.append(-1)
        else:
            answer.append(index - di[i])
        di[i] = index
    return answer