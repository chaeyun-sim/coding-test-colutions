word = input()
alpabet = list(range(97, 123))

for i in alpabet:
    print(word.find(chr(i)))