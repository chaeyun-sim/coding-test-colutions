// 11~16, 18, 24~25 시간 초과

function solution(number, limit, power) {
    const numberList = new Array(number).fill().map((_, i) => i + 1)

    let lst = []
    for (n of numberList) {
        const nums = []
        for (let i = 1; i <= number; i++) {
            if (n % i === 0) {
                nums.push(i)
            }
        }
        lst.push(nums.length)
    }
    lst = lst.map(el => el > limit ? power : el)
    return lst.reduce((a, b) => a + b)
}


// 성공!

function solution(number, limit, power) {
    const numberList = new Array(number).fill().map((_, i) => i + 1)

    let lst = []
    for (n of numberList) {
        let nums = 0
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                if (n / i === i) nums += 1
                else nums += 2
            }
        }
        if (nums > limit) {
            nums = power
        }
        lst.push(nums)
    }
    return lst.reduce((a, b) => a + b)
}