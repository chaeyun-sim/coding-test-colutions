def solution(arr):
    return sum(arr) / len(arr)



# statistics 모듈을 사용한 풀이
import statistics
def average(arr):
    return statistics.mean(arr)