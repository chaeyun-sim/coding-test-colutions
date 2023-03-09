def solution(a, b, n):
    answer = 0
    while n >= a:   # 가지고 있는 빈 병의 수가 마트에 줄 수 있는 병수보다 클 때 (2병 이상)
        answer += b   # 다시 반환한 병 수
        n = n - a + b # 내가 가진 병의 수는 빈 병에서 준 병수를 빼고 받은 병수를 더한다
    return answer



# lambda를 사용한 풀이 (와........)
solution = lambda a, b, n: max(n - b, 0) // (a - b) * b
