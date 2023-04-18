function solution(spell, dic) {
    let arr = [];
    for (let val of dic) {
        if (val.length === spell.length && [...val].sort().join('') === spell.sort().join('')) {
            arr.push(val)
        }
    }
    return arr.length ? 1 : 2;
}


// some 메서드를 사용한 간단한 풀이
function solution(spell, dic) {
    return dic.some(s => spell.sort().toString() === [...s].sort().toString()) ? 1 : 2;
}


// filter와 every도 사용할 수 있다
function solution(spell, dic) {
    return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
}