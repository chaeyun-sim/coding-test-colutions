// 3~9, 11~12, 14 시간 초과
function solution(ingredient) {
    let tmp = ingredient.join('');
    let cnt = 0
    for (let i = 0; i < ingredient.length - 4; i++) {
        tmp = tmp.replace('1231', () => {
            cnt += 1;
            return ""})
    }
    return cnt
}


// 성공

function solution(ingredient) {
    let stack = []
    let cnt = 0;
    
    ingredient.map(el => {
        stack.push(el)
        
        if (stack.slice(-4).join('') === '1231') {
            cnt += 1
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
        }
    })
    return cnt
}