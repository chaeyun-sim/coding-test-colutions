function solution(rsp) {
    return [...rsp].map(el => el === '2' ? '0' : el === '0' ? '5' : el === '5' ? '2' : '').join('')
}


// 시간이 조금 더 걸린 다른 코드
function solution(rsp){
    const di = {'2': '0', '0': '5', '5': '2'}
    return [...rsp].map(el => di[el]).join('')
}