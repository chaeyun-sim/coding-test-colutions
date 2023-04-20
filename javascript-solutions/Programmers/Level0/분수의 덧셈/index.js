function solution(num1, denum1, num2, denum2){
    const fraction = [((num1 * denum2) + (num2 * denum1)), (denum1 * denum2)]
    
    let gcd = 1;
    
    for (let i = 2; i <= Math.min(fraction[0], fraction[1]); i++){
        if(fraction[0] % i === 0 && fraction[1] % i === 0){
            gcd = i;
        }
    }
    
    return gcd === 1 ? fraction : fraction.map(el => el / gcd)
}