word = input()

result = ""
for letter in word:
    if letter.isupper():
        result += letter.lower()
    elif letter.islower():
        result += letter.upper()
print(result)