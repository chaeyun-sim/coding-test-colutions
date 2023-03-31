def solution(my_string):
    total = 0
    con_num = ""
    for letter in my_string:
        if letter.isdigit():
            con_num += letter
        else:
            if len(con_num) == 0:
                continue
            total += int(con_num)
            con_num = ""
    if len(con_num) != 0:
        total += int(con_num)
        
    return total


# 상위 코드를 list comprehension을 사용하여 한 줄로 만들 수도 있음
def solution(my_string):
    s = ''.join(i if i.isdigit() else ' ' for i in my_string)
    return sum(int(i) for i in s.split())