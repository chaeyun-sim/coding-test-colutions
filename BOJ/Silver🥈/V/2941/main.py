word = input()
di = {'c=': 'č', 'c-': 'ć', 'dz=': 'dž', 'd-': 'đ', 's=': 'š', 'z=': 'ž', 'lj': 'lj', 'nj': 'nj'}
lst = list(di.keys())

for i in lst :
    word = word.replace(i, "*")
print(len(word))