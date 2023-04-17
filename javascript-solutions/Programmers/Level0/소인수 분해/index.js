function solution(n) {
    let arr = []

    let i = 2;
    while (i <= n) {
      if (n % i === 0) {
        arr.push(i)     
        n = n / i
      } else {
        i += 1     
      }
    }
    return Array.from(new Set(arr))
}