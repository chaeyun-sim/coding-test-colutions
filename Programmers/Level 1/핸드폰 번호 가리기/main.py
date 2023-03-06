def solution(phone_number):
    lst = ["*" for _ in range(0, len(phone_number) - 4)]
    return ''.join(lst) + phone_number[-4:]




# 더 단순한 방법의 풀이
def solution(phone_number):
    return "*" * (len(phone_number) - 4) + phone_number[-4:]