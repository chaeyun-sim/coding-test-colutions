function solution(n) {
    let cnt = 1;
    for (let i = 2; i <= 11; i++) {
        if (cnt > n) {
            return i - 2;
        } else if (cnt === n) {
            return i - 1;
        } else {
            cnt *= i
        }
    }
}



// 다른 풀ㅣ
function solution(n) {
    for (let i = 1, v = 1; true; v *= ++i) {
        if(v > n) {
            return --i;
        }
    }
}