def solution(s):
    di = {}
    eng_num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for i, j in enumerate(eng_num): di[j] = [i]

    for i in di.keys():
        if i in s:
            s = s.replace(i, str(di[i][0]))
    return int(s)



# 숫자와 영문을 딕셔너리로 만들어서 사용한 풀이
num_dic = {"zero":"0", "one":"1", "two":"2", "three":"3", "four":"4", "five":"5", "six":"6", "seven":"7", "eight":"8", "nine":"9"}

def solution(s):
    answer = s
    for key, value in num_dic.items():
        answer = answer.replace(key, value)
    return int(answer)



# range(len()) 을 사용한 풀이
def solution(s):
    words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    for i in range(len(words)):
        s = s.replace(words[i], str(i))
    return int(s)

