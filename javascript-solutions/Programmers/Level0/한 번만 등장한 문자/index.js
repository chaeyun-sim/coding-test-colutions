function solution(s) {
    const dic = {};
    const arr = [...s];
    let answer = "";
    
    arr.sort().map(el => dic[el] = 0);
    for (let letter of arr) {
        if (dic[letter] > 0) {
            dic[letter] += 1
        } else {
            dic[letter] = 1;
        }
    }
    for (let [alpha, cnt] of Object.entries(dic)) {
        if (cnt === 1) {
            answer += alpha
        }
    }
    return answer
}


// 와우 indexOf를 사용한 풀이
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}