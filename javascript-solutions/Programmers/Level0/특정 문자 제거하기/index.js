function solution(my_string, letter) {
    const arr = [...my_string]
    return arr.filter(el => el != letter).join('')
}