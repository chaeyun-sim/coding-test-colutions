dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
word = input()

answer = 0
for s in word:
    for alpha in dial:
        if s in alpha:
            answer += dial.index(alpha) + 3
print(answer)