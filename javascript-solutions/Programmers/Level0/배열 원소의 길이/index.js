function solution(strlist) {
    const answer = [];
    for (let i = 0; i < strlist.length; i++) {
        answer.push(strlist[i].length)
    }
    return answer
}


// map을 쓰는 방법도 있었다!
function solution(strlist) {
    return strlist.map((el) => el.length)
}