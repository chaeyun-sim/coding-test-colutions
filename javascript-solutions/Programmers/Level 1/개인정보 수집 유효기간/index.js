function solution(today, terms, privacies) {
    let di = {}
    terms = terms.map(el => di[el[0]] = Number(el.substr(1).trim()))
    const result = []

    for (let i = 0; i < privacies.length; i++) {
        let [pDate, code] = privacies[i].split(' ')
        
        pDate = new Date(pDate)
        pDate.setMonth(pDate.getMonth() + di[code])
        
        if (pDate <= new Date(today)) result.push(i + 1)
    }
    return result
}