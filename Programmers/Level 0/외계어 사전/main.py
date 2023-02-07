def solution(spell, dic):
    for word in dic:
        if len(word) == len(spell):
            new_word = sorted([letter for letter in word])
            spell = sorted(spell)
            if spell == new_word:
                return 1
    return 2



# 더 짧게도 가능하다
def solution(spell, dic):
    for d in dic:
        if sorted(d) == sorted(spell):
            return 1
    return 2