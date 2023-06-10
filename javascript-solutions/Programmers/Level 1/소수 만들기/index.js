function isPrime(n) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n % i === 0) return false
    }
    return true
}

function solution(nums) {
    let arr = []
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                arr.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    return arr.filter(el => isPrime(el)).length
}