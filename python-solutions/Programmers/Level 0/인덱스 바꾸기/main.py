def solution(my_string, num1, num2):
    answer = [letter for letter in my_string]
    answer[num1] = my_string[num2]
    answer[num2] = my_string[num1]
    return ''.join(answer)