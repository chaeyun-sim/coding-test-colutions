while True:
    n = [i for i in input()]
    if int(n[0]) == 0 : break

    total = 0
    for i in range(len(n)):
        if int(n[i]) == 1:
            total += 2
        elif int(n[i]) == 0:
            total += 4
        else:
            total += 3

    print(total + len(n) + 1)
    # 제일 처음 여백 + 1, 제일 마지막 여백 + 1, 글 사이 여백 len(n) -1, 글자가 차지하는 칸 수 total