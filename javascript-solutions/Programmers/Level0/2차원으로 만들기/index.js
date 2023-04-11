function solution(num_list, n) {
    const arr = []
    for (let i = 0; i < (num_list.length / n); i++){
        arr.push(num_list.slice(i * n, (i * n) + n))
    }
    return arr
}


// splice를 쓰면 범위를 지정하지 않고 계속 잘라 갈 수 있다.
answer.push(num_list.splice(0, n))


// Array.fill을 사용한 풀이
function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}