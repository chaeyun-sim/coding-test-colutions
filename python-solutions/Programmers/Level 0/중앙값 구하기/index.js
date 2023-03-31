function solution(array) {
    array.sort((a,b) => a-b);   // sort은 유니코드 값 기준이므로 숫자 기준으로 정렬하려면 (a,b) => a - b 라는 조건을 추가해야한다.
    return array[Math.round(array.length / 2) -1]
}