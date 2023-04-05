function solution(my_string) {
    const arr = []
    for (let i = 0; i < my_string.length; i++) {
        if (parseInt(my_string[i])) {
            arr.push(parseInt(my_string[i]))
        } else if (my_string[i] === '0') {
            arr.push(0)
        }
    }
    return arr.sort()
}