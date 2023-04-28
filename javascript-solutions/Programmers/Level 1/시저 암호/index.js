function solution(s, n) {
    let arr = []
    for (let i of s) {
        let convert = i.charCodeAt() + n
        if (i === i.toLowerCase() && convert > 122 || i === i.toUpperCase() && convert > 90) {
            arr.push(String.fromCharCode(convert - 26))
        } else {
            if (i === " ") {
                arr.push(" ")
            } else {
                arr.push(String.fromCharCode(convert))
            }
        }
    }
    return arr.join('')
}

// a 97
// z 122
// A 65
// Z 90