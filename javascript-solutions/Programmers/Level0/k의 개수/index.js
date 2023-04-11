function solution(i, j, k) {
    let cnt = 0;
    for (let n = i; n <= j; n++){
        for (let m of n.toString()) {
            if (Number(m) === k) {
                cnt += 1;
            }
        }
    }
    return cnt;
}



// split을 이용한 풀이
function solution(i, j, k) {
    let a = '';
    for (let i ; i <= j; i++) {
        a += i;
    }

    return a.split(k).length - 1;
}