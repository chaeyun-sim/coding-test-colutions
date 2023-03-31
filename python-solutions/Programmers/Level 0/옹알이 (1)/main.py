from itertools import permutations

def solution(babbling):
    words = ['aya', 'ye', 'woo', 'ma']  # 조카가 발음할 수 있는 단어들
    speeks = []
    for i in range(1, len(words) + 1):
        for j in permutations(words, i):  ## for i in words, for j in words 를 함수화한 것
            speeks.append(''.join(j))

    result = [i for i in babbling if i in speeks]   
    return len(result)