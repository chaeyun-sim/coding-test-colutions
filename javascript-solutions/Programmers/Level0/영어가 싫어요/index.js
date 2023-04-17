function solution(numbers) {
    const di = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, zero: 0}
    for (let key in di) {
        numbers = numbers.replaceAll(key, di[key])
    }
    return parseInt(numbers)
}



// reduce를 사용하는 방법
function solution(numbers) {
    return Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i)=>t.replaceAll(s,i),n))
}
