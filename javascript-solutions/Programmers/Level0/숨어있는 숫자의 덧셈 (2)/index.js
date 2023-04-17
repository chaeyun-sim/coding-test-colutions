function solution(my_string) {
    let answer = 0;
    const arr = [...my_string].map(el => isNaN(el) ? '*' : el).join('').split('*')
    for (let i of arr) {
        if (i !== ' ') {
            answer += Number(i)
        }
    }
    return answer;
}


// 정규식을 사용한 방법 1 (Decimal)
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}


// 정규식을 사용한 방법 2
function solution(my_string) {
    return my_string.replace(/[A-z]/g, " ").split(" ").map((v) => v*1).reduce((a,b) => a+b)
}