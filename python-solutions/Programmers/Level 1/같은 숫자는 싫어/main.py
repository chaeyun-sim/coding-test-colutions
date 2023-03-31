def solution(arr):
    answer = []
    for i in range(0, len(arr) - 1):
        if arr[i] != arr[i + 1]:
            answer.append(arr[i])
    answer.append(arr[-1])
    return answer



# reverse를 사용한 풀이
def solution(s):
    a = []
    for i in s:
        if a[-1:] == [i]: continue
        a.append(i)
    return a