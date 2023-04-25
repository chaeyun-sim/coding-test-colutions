function solution(seoul) {
    for (let name of seoul) {
        if (name === 'Kim') {
            const idx = seoul.indexOf(name)
            return `김서방은 ${idx}에 있다`
        }
    }
}


// 처음부터 indexOf를 쓸수도 있다.
function solution(seoul) {
    let idx = seoul.indexOf('Kim')
    return '김서방은 ' + idx + "에 있다"
}