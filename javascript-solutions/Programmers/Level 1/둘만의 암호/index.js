function solution(s, skip, index) {
    let arr = []
    for (let v of s) { 
        let code = v.charCodeAt()
        let idx = index
        
        while (idx > 0) {
            if (code === 122) code = 97
            else code += 1
            
            if (!skip.includes(String.fromCharCode(code))) {
                idx -= 1
            }
        }
        arr.push(String.fromCharCode(code))
    }
    return arr.join('')
}