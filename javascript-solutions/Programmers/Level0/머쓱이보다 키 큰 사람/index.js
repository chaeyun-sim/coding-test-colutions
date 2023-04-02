function solution(array, height) {
    const arr = array.sort()   // 작은 순서대로 정렬
    const count = arr.map((el) => el > height ? 1 : 0) // 친구들의 키가 머쓱이보다 크면 1 아니면 0
    return count.reduce((a, b) => a + b) // 위의 배열의 총합을 구하면 값이 나온다.
}




// 필터를 쓰는 아주 좋은 방법 (내 코드를 한줄로!)
function solution(array, height) {
    const answer = array.filter(item => item > height);
    return answer.length;
}