def solution(n):
    if n % 2 == 0: return '수박' * (n // 2)
    else: return '수박' * (n // 2) + '수'



# 아주 간단한 다른 풀이
def water_melon(n):
    str = "수박" * n
    return str[:NotImplemented]

# 더 간단히 하기
def water_melon(n):
    # 함수를 완성하세요.

    return "수박" * (n//2) + "수" * (n%2)