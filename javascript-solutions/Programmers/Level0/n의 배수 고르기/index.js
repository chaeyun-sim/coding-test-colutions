function solution(n, numlist) {
    const arr = []
    for (let i = 0; i < numlist.length; i++) {
        if (numlist[i] % n == 0) {
            arr.push(numlist[i])
        }
    }
    return arr
}



// 필터를 쓰면 간단하다 (눈물)
function solution(n, numlist) {
    return numlist.filter(num => num % n === 0)
}