def solution(n):
    return int(''.join(sorted([i for i in str(n)], reverse=True)))



# list를 사용한 풀이
def solution(n):
    return int("".join(sorted(list(str(n)), reverse=True)));