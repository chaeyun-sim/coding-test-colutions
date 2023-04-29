function solution(n, arr1, arr2) {
    const answer = [];
    let arr = [arr1, arr2]
    arr = arr.map(item => item.map(el => el.toString(2)));

    for (let i = 0; i < arr1.length; i++) {
        let sum = parseInt(arr[0][i]) + parseInt(arr[1][i])
        const len = sum.toString().length
        if (len !== n) {
            sum = "0".repeat(n - len) + sum.toString()
        }
        answer.push(sum)
    }
    return answer.map(el => [...el.toString()].map(v => ['1', '2'].includes(v.toString()) ? '#' : ' ').join(''))
}


// 와 더 간결한 풀이...
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}


// 정규식을 사용한 풀이
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))