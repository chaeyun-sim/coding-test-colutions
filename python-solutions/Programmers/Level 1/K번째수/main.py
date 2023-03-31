def solution(array, commands):
    lst = []
    for arr in commands:
        new_arr = array[arr[0] - 1:arr[1]]

        if len(new_arr) == 1:
            lst.append(new_arr[0])
        else:
            lst.append(sorted(new_arr)[arr[2] - 1])
    return lst




# lambda를 사용한 멋진 풀이
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))


# 각각의 변수에 값을 준 풀이
def solution(array, commands):
    answer = []
    for command in commands:
        i,j,k = command
        answer.append(list(sorted(array[i-1:j]))[k-1])
    return answer