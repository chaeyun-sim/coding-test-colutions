function solution(new_id) {
    let test = new_id.toLowerCase()
    test = test
        .replace(/[^\w\-\.]/g, "")
        .replace(/\.{2,}/g, ".")
    test = test[0] === '.' ? test.substr(1) : test[test.length - 1] === '.' ? test.substr(0, test.length - 1) : test
    
    if (test.length === 0) test = 'a'
    
    test = test.length > 15 ? test.slice(0, 15) : test
    test = test[test.length - 1] === '.' ? test.substr(0, test.length - 1) : test
    if (test.length <= 2) {
        test += test[test.length - 1].repeat(3 - test.length)
    }
    return test
}