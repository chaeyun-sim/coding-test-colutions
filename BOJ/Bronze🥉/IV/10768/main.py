month = int(input())
day = int(input())

if day == 18 and month == 2:
    print('Special')
elif day > 18 and month >= 2:
    print('After')
elif day < 12 and month > 2:
    print('After')
else:
    print('Before')