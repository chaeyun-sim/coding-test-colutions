function solution(my_string, num1, num2) {
    const tmp = my_string[num1]
    const arr = [...my_string]
    arr[num1] = arr[num2]
    arr[num2] = tmp
    return arr.join('')
}


// 구조 분해 할당 응용
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}