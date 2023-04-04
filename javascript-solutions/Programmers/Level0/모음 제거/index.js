function solution(my_string) {
    return [...my_string].filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}

// 중간에 some을 거치치 않고 filter(includes()) 로 바로 하는 방법도 있다.


// 정규표현식을 사용한 코드
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '')
}