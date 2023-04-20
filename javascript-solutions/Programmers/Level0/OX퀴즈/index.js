function solution(quiz) {
    const result = [];
    for (let item of quiz) {
        const arr = item.split(' ')
        let num = 0;
        arr[1] === '-' ? num = Number(arr[2]) * -1 : num = Number(arr[2])
        Number(arr[0]) + num === Number(arr[4]) ? result.push("O") : result.push("X")
    }
    return result
}