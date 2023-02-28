book_price = int(input())
all_price = [int(input()) for _ in range(9)]
print(book_price - sum(all_price))