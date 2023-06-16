function solution(dartResult) {
    let str = ''
    let dart = []
    for (let d of dartResult) {
        str += d
        if (isNaN(d)) {
            dart.push(str)
            str = ''
        }
    }
    console.log(dart)
    let result = []
    for (let j of dart) {
        if (j.includes('S')) result.push(Number(j.split('S')[0]))
        else if (j.includes('D')) result.push(Number(j.split('D')[0]) ** 2)
        else if (j.includes('T')) result.push(Number(j.split('T')[0]) ** 3)
        else if (j === '*') {
            if (result.length === 1) result[0] *= 2
            else {
                result[result.length - 1] *= 2
                result[result.length - 2] *= 2
            }
        }
        else if (j === '#') {
            result[result.length - 1] *= -1
        }
    }
    return result.reduce((a, b) => a + b)
}
