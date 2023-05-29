function solution(k, score) {
    let arr = []
    const result = []
    
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            arr.push(score[i])
            arr.sort((a, b) => a - b)
            result.push(arr[0])
        } else {
            if (arr.some(el => score[i] > el)) {
                arr.push(score[i])
                arr.sort((a, b) => a - b)
                arr.shift()
            }
            result.push(arr[0])
        } 
    }
    return result
}