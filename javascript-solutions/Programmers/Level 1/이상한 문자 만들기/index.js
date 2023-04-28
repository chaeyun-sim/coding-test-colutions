function solution(s) {
    const arr = [];
    return s.split(' ').map((el, i) => {
        const tmp = [...el].map((v, index) => index % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('')
        return i !== s.split(' ').length - 1 ? tmp + " " : tmp
    }).join('')
}


// 정규식을 사용한 풀이 (다만 시간이 좀 많이 느림)
function solution(s){
    return s.toUpperCase().replace(/(\w)(\w)/g, (a) => a[0].toUpperCase() + a[1].toLowerCase())
}