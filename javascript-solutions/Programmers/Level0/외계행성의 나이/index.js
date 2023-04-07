function solution(age) {
    let s = ""
    for (let i of [...age.toString()]) {
        s += String.fromCharCode(97 + Number(i))
    }
    return s
}

// 숫자 -> 문자 (String.fromCharCode(숫자))
// 문자 -> 숫자 (convertString.charCodeAt(+숫자))



// ascii 변환을 쓰지 않은 풀이
function solution(age) {
  return age.toString().split("").map((v) => "abcdefghij"[v]).join("");
}