function solution(cipher, code) {
    let answer = ''
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i]
    }
    return answer
}


// filter로 인덱스를 가져올 수 있다!
function solution(cipher, code){
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('')
}