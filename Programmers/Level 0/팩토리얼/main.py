def solution(n):
    total = 1      # total 이 0부터 시작하면 어떤 숫자를 곱해도 답은 0이기 때문에 1로 시작한다.
    for i in range(1, 11):  # 3628800 은 10! 이기 때문에 1~11로 범위를 지정한다.
        total *= i   # 매 수를 total에 곱한다.
        if total == n or total / i <= n < total * (i+1):
            # 만약 total이 n과 같은 숫자거나
            # n이 total / n과 같거나 클 경우 (즉 total에서 마지막 숫자를 나눈다 (예 6! -> 5!)
            # 혹은 total * (i+1) 보다 작을 경우 (total에 i의 다음 숫자를 곱한다. (예 6! -> 7!))
            # 다음 팩토리얼보다 숫자가 작아야하기 때문에 total * (i+1)은 포함하지 않는다.
            return i
            