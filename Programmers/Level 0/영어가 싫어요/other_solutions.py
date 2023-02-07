## 다른 풀이


## enumerate를 사용한 풀이
def solution(numbers):  # enumarate는 내부 값에 대한 index를 자동으로 지정한다.
    for num, eng in enumerate(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]):
        numbers = numbers.replace(eng, str(num))
    return int(numbers)