function solution(n) {
    const arr = new Array(n * 3).fill().map((_, i) => i + 1)
    return arr.filter((el) => el % 3 !== 0 && !el.toString().includes("3"))[n - 1];
}