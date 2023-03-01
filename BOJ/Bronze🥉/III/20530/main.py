di = {'E': 'I', 'N': 'S', 'T': 'F', 'J': 'P'}

word = input()
result = ""
for letter in word:
    if letter in di.keys():
        result += di[letter]
    else:
        result += list(di.keys())[list(di.values()).index(letter)]
print(result)