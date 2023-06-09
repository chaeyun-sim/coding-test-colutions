// 10, 17, 22~24번만 성공
function solution(id_list, report, k) {
    const declare = {}
    const people = {}
    id_list.map(el => declare[el] = 0)
    id_list.map(el => people[el] = [])
    report = [...new Set(report)]

    for (let r of report) {
        let [from, to] = r.split(' ')
        declare[to] += 1
        people[from].push(to)
    }
    
    const answer = []
    for (let p of Object.keys(people)) {
        people[p] = people[p].filter(el => declare[el] === k )
        answer.push(people[p].length)
    }
    return answer
}



// 통과
function solution(id_list, report, k) {
    let userList = []
    report = [...new Set(report)]
    
    for (const i of id_list) {
        userList[i] = { from: [], to: [], banned: false }
    }
    
    for (let r of report) {
        let [from, to] = r.split(' ');
        userList[to].from.push(from)
        userList[from].to.push(to)
        if (userList[to].from.length >= k) userList[to].banned = true
    }
    
    return id_list.map(el => userList[el].to.filter(v => userList[v].banned).length)
}