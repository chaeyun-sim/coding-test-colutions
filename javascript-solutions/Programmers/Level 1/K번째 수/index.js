function solution(array, commands) {
    const arr = [];
    const lst = new Array(commands.length).fill().map(el => array)
    for (let n = 0; n < commands.length; n++) {
        const [i, j, k] = commands[n];
        arr.push(lst[n].slice(i - 1, j).sort((a, b) => a - b)[k - 1])
    }
    return arr
}


// 간결한 코드
function solution(array, commands) {
    return commands.map(v => {
        return array
        .slice(v[0] - 1, v[1])
        .sort((a, b) => a - b)
        .slice(v[2] - 1, v[2])[0]
    })
}