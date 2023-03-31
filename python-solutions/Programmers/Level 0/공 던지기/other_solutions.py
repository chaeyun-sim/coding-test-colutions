## 다른 풀이


## list comprehension과 slice를 사용한 풀이
def solution(numbers, k):
    players = numbers[0::2] if len(numbers) % 2 == 0 else numbers[0::2] + numbers[1::2]
    return players[(k % len(players)) - 1]


## Modul(%)을 사용한 풀이
def solution(numbers, k):
    return numbers[(k - 1) * 2 % len(numbers)]

def solution(numbers, k):
    return (k - 1) * 2 % numbers[-1] + 1


## collections를 사용한 풀이
from collections import deque  # double-ended queue : 양방향 데이터 처리 자료구조 + 리스트랑 거의 같음

def solution(numbers, k):
    array = deque(numbers)  # [1, 2, 3]와 deque([1, 2, 3])은 같음
    array.rotate(-(k - 1) * 2)

    return array[0]


## divmod를 사용한 풀이
def solution(numbers, k):
    point = 2 * k
    a,b = divmod(point, len(numbers))  # divmod : 첫번째 인자를 두번째 인자로 나눈 몫과 나머지를 tuple 형식으로 반환함
    numbers = numbers * a + numbers[:b - 1]
    return numbers[-1]