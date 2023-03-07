def solution(s):
    return True if s.isdigit() and len(s) in [4, 6] else False



# return 에서 and 쓰기 (or은 봤어도 and는 처음이다)
def solution(s):
    return s.isdigit() and len(s) in [4, 6]

# 정규식을 사용한 풀이
def solution(s):
    import re
    return bool(re.match("^(\d{4}|\d{6})$", s))