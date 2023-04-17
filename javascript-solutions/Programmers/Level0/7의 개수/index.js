function solution(array) {
    let cnt = 0;
    array.join('').split('').map(el => el === '7'? cnt++ : 0)
    return cnt
}


// filter 사용해도 된다
array.join('').split('').filter(el => el === '7').length