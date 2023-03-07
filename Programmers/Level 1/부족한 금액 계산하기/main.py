def solution(price, money, count):
    total = sum([price * i for i in range(1, count + 1)])
    return total - money if total > money else 0



# max를 사용한 풀이
def solution(price, money, count):
    return max(0,price*(count+1)*count//2-money)