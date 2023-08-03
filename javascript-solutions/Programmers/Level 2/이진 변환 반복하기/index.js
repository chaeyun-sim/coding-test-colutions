function solution(s) {
    let tmp = s
    let zeros = 0
    let cnt = 0;
    while (tmp !== '1') {
        const splited = tmp.split('')
        let noZeros = tmp.replaceAll('0', '').length
        zeros += tmp.length - noZeros
        tmp = noZeros.toString(2)
        cnt++
    }
    return [cnt, zeros]
}