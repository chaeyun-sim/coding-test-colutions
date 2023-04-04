function solution(numbers) {
    return numbers.map((el) => el * 2)
}


// reduce 를 사용한 풀이
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], [])
}

// [...a] => 모든 숫자를 차례대로 돈다(for), b * 2 => 숫자를 2배로 반환한다, [] => 다음 차례가 되면 초기화한다.