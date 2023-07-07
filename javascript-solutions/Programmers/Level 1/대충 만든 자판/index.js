// 다른 사람들의 코드를 참고해서 작성하였다.

function solution(keymap, targets) {
    let map = {}
    for (let key of keymap) {
        key.split('').map((k, i) => {
            if (!map[k]) map[k] = i + 1
            else map[k] = Math.min(map[k], i + 1)
        })
    }
    
    let result = []
    for (let target of targets) {
        let tmp = []
        target.split('').map((t) => {
            tmp.push(map[t])
        })
        result.push(tmp.reduce((a, b) => a + b))
        tmp = []
    }
    return result.map(el => isNaN(el) ? -1 : el)
}