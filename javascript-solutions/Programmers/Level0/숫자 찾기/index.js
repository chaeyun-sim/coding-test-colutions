function solution(num, k) {
    const tmp = [...num.toString()].indexOf(k.toString()) 
    return tmp != -1 ? tmp + 1 : -1
}


// 다른 풀이
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}