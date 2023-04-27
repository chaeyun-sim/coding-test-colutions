function solution(n, m) {
    let gcd = 1;
    const minVal = n > m ? m : n;
    
    for( let i = 2; i <= minVal; i++){
        if (n % i === 0 && m % i === 0) gcd = i;
    }
    
    const lcm = (n * m) / gcd
    return [gcd, lcm]
}