function solution(balls, share) {
    let a = 1;
    let b = 1;
    let c = 1;
    
    for (let i = 1; i <= balls; i++) {
        a *= i;
    }
    
    for (let i = 1; i <= balls - share; i++) {
        b *= i;
    }
    
    for (let i = 1; i <= share; i++) {
        c *= i;
    }
    return Math.round(a / (b * c))
}


// reduce와 Array를 쓰는 경우
const factorial = num => Array.from({ length: num}, (_, i) => i + 1).reduce((a, c) => a *= c, 1)
const solution = (n, m) => Math.round(factorial(n) / factorial(n - m) * factorial(m))