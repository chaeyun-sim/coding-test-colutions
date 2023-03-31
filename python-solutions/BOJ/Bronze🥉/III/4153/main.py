while True:
    numbers = [int(i) for i in list(map(int, input().split()))]
    if numbers == [0, 0, 0]:
        break
    numbers.sort()

    if numbers[0] ** 2 + numbers[1] ** 2 == max(numbers) ** 2:
        print('right')
    else:
        print('wrong')