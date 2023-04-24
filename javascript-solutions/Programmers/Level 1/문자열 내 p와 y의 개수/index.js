function solution(s){
    let p = 0;
    let y = 0;
    s.toLowerCase().split('').map(el => el === 'p' ? p++ : el === 'y' ? y++ : el)
    return p === y
}