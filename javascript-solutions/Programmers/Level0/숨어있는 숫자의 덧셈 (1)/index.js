// 0.13ms

function solution(my_string) {
    const arr = [...my_string].map(el => Number(el) ? Number(el) : '')
    return [...arr].reduce((a, b) => Number(a) + Number(b))
}


// 0.05ms
function solution(my_string) {
    let answer = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (Number(my_string[i])) {
            answer += Number(my_string[i])
        }
    }
    return answer
}