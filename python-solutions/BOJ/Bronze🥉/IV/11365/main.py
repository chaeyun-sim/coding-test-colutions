while True:
    sentence = input()
    if sentence == 'END':
        break
    
    result = ''
    length = len(sentence)
    for i in range(1, len(sentence) + 1):
        result += sentence[-i]
    print(result)