import sys

deque = []
n = int(sys.stdin.readline())

for _ in range(n):
    word = sys.stdin.readline().split()
    command = word[0]

    if command == 'push_front':
        deque.insert(0, word[1])
    elif command == 'push_back':
        deque.append(word[1])
    elif command == 'pop_front':
        if len(deque) == 0:
            print(-1)
        else:
          print(deque[0])
          deque.remove(deque[0])
    elif command == 'pop_back':
        if len(deque) == 0:
            print(-1)
        else:
            print(deque.pop())
    elif command == 'size':
        print(len(deque))
    elif command == 'empty':
        print(1) if len(deque) == 0 else print(0)
    elif command == 'front':
        print(deque[0]) if len(deque) != 0 else print(-1)
    else:
        print(deque[-1]) if len(deque) != 0 else print(-1)