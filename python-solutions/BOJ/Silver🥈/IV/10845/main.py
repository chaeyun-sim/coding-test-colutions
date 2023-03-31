import sys

N = int(sys.stdin.readline())

result = []

for i in range(N):
    word = sys.stdin.readline().split()
    command = word[0]


    if command == "push":
        result.insert(0, word[1])

    elif command == "pop":
        if len(result) != 0: print(result.pop())
        else: print(-1)

    elif command == "size":
        print(len(result))

    elif command == "empty":
        if len(result) == 0: print(1)
        else : print(0)

    elif command == "front":
        if len(result) == 0: print(-1)
        else: print(result[len(result) -1])

    elif command == "back":
        if len(result) == 0: print(-1)
        else: print(result[0])