function solution(babbling) {
    let words = ["aya", "ye", "woo", "ma"];

    let arr = babbling;
    for (let s of words) {
        arr = arr.map(el => el.includes(s) ? el.replace(s, "1") : el)
    }
    return arr.map(el => el.replaceAll('1', '')).filter(el => el === '').length
}



// 와 정규식을 쓴 간단한 방법!
function solution(babbling) {
    let answer = 0;
    const regex = /&(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;
    })

    return answer
}