function solution(n, words) {
    const stack = []
    let answer = [0, 0]
    for (let i = 0; i < words.length; i++) {
        let prevWord = words[i - 1]
        
        if (i && prevWord.slice(-1) !== words[i].slice(0, 1)) {
            return answer = [i % n + 1, Math.floor(i / n) + 1]
        } else if (words.indexOf(words[i]) !== i) {
            return answer = [i % n + 1, Math.floor(i / n) + 1]
        } 
            stack.push(words[i])
        
    }
    return answer
}