def solution(arr1, arr2):
    return [[arr1[i][j] + arr2[i][j] for j in range(len(arr1[0]))] for i in range(len(arr1))]


# zip을 사용한 풀이
def solution(arr1, arr2):
    return [[c + d for c, d in zip(a,b)] for a, b in zip(arr1, arr2)]


# *args 를 사용한 코드
def solution(arr1, arr2):
    return [list(map(sum, zip(*x))) for x in zip(arr1, arr2)]