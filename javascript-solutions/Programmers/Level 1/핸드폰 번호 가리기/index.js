function solution(phone_number) {
    return [...phone_number].map((el, i) => i < phone_number.length - 4 ? '*' : el).join('')
}


// 정규식을 사용한 풀이
function solution(phone_number) {
    return s.replace(/\d(?=\d{4})/g, "*");
}


// 슬라이스는 음수도 쓸 수 있다
function solution(phone_number){
    return "*".repeat(s.length - 4) + s.slice(-4)
}