my_piece = input().split()
piece_set = [1, 1, 2, 2, 2, 8]

result = ""
for i_1, i_2 in zip(piece_set, my_piece):
    result += str(int(i_1) - int(i_2)) + " "
print(result)