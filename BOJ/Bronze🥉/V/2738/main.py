row, col = input().split()
rows = int(row)
cols = int(col)

rowData1 = []
rowData2 = []
for item in range(rows):
    data = input().split()
    rowData1.append(data)
    
for item in range(rows):
    data = input().split()
    rowData2.append(data)

for row in range(rows):
    for col in range(cols):
        print(int(rowData1[row][col]) + int(rowData2[row][col]), end=' ')
    print("")