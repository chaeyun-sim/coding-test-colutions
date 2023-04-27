function solution(left, right) {
    let answer = 0; 
    for (let i = left; i <= right; i++) {
        let total = 0
        for (let j = 1; j <= i; j++){
            if (i % j === 0) total++
        }
        if (total % 2 === 0) answer += i
        else answer -= i
    }
    return answer
}


// 와! 제곱근 사용한 풀이!
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

// 제곱근이 정수면, 약수의 갯수가 홀수이다.