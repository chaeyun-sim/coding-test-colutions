while True:
    total = 0
    word = input().lower()
    if word == '#':
        break
    for letter in word:
        if letter in 'aeiou':
            total += 1
    print(total)