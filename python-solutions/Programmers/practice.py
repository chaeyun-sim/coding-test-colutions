
# 실패한 코드 (왜 실패했는지 모르겠다..)
def solution(s, n):
    arr = [i for i in s]
    answer = ""
    for alpha in arr:
        if alpha == ' ':
            answer += ' '
        else:
            if alpha == 'z':
                answer += chr(97 + (n - 1))
            elif alpha == 'Z':
                answer += chr (ord('A') + (n - 1))
            else: 
                answer += chr(ord(alpha) + n)
    return answer


