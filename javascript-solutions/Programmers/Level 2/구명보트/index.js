function solution(people, limit) {
    people.sort((a, b) => b - a)
    
    let cnt = 0
    for (let p of people) {
        if (p + people.at(-1) <= limit) people.pop()
        cnt++
    }
    return cnt
}