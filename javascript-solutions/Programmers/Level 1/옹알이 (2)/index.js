// 8, 12, 13, 17, 18 실패

function solution(babbling) {
    let tmp = ['aya', 'ye', 'woo', 'ma']
    for (let i = 0; i < tmp.length; i++) {
        babbling = babbling.map(el => el.replaceAll(tmp[i], i))
    }
    babbling = babbling.filter(el => !isNaN(el))
    
    let wrong = 0;
    for (let j of babbling) {
       let babb = j.split('')
       babb.forEach((v, idx) => Number(v) === Number(babb[idx + 1]) ? wrong += 1 : v)
    }
    return babbling.length - wrong
}


// 성공!

function solution(babbling) {
    let tmp = ['aya', 'ye', 'woo', 'ma']
    let cnt = 0
    
    for (let b of babbling){    
        for(let j = 0; j < tmp.length; j++){
            if (!b.includes(tmp[j].repeat(2))) {
                b = b.replaceAll(tmp[j], j)   
            }
        }
        if (!isNaN(babb)) cnt += 1
    }
    return cnt
}