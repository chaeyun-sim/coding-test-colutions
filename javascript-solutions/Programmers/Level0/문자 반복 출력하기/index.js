function solution(my_string, n) {
    let answer = [];
    for (let i in my_string) {
        for (let j = 0; j < n; j++) {
            answer.push(my_string[i])
        }
    }
    return answer.join('')
}


//map을 사용하는 방법
const answer = [...my_string].map(el => el.repeat(n)).join('')

// reduce를 사용하는 방법
const answer = my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')