def solution(arr, divisor):
    lst = sorted([i for i in arr if i % divisor == 0])
    return [-1] if len(lst) == 0 else lst


# or을 사용하여 둘 중 맞는 하나를 return 하기
def solution(arr, divisor): return sorted([n for n in arr if n % divisor == 0] or [-1])