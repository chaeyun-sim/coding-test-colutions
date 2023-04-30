function solution(a, b) {
    const month = {1: 31, 2 : 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    let arr = new Array(a - 1).fill().map((_, i) => month[i + 1])
    arr.push(b - 1)
    const result = arr.reduce((a, b) => a + b) % 7
    return day[result]
}


// Date를 사용한 풀이
function solution(a, b){
    var tempDate = new Date(2016, a - 1, b);
    return tempDate.toString().slice(0,3).toUpperCase();
}