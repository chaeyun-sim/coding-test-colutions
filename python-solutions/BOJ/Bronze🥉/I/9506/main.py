while True:
    n = int(input())
    if n == -1: break

    nums = [i for i in range(1, n) if n % i == 0]
    
    if sum(nums) == n:
      print(f"{n} = {' + '.join(map(str, nums))}")
    else:
        print(f"{n} is NOT perfect.")