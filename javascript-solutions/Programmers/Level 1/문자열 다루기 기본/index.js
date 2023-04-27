function solution(s) {
    return ([4, 6].includes(s.length) && !isNaN(s) && ![...s].some(el => el === 'e'))
}


// 1. s의 길이 확인
// 2. 영문을 포함하는지 isNaN으로 확인
// 3. 질문하기에서 반례 확인 (e)
// 3-1. 'e'는 지수를 표기할때 사용하기 때문에 e를 단독으로 쓰면 false가 나오지만 1e1 이런식으로 숫자 사이에 쓰면 숫자로 인식되어 true를 반환한다.



// 정규식 사용한 풀이
function solution (s) {
    return /^\d{6}&|^\d{4}$/.test(s)
}