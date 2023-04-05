function solution(my_string) {
    return [...my_string].map(el => el.toUpperCase() == el ? el.toLowerCase() : el.toUpperCase()).join('')
}