function solution(elements) {
    let arr = []
    let newElements = [...elements, ...elements]
    for (let i = 0; i < elements.length; i++){
        for (let j = 0; j < elements.length; j++) {
            let tmp = newElements.slice(j, j + 1 + i)
            arr.push(tmp.reduce((a,b) => a + b))   
        }
    }
    return [...new Set(arr)].length
}


// 처음엔 line 6~7에 if문으로 조건을 넣어 구했더니 계속 시간초과가 떴다.