function solution(A,B){
    A.sort((a, b) => b - a)
    B.sort((a, b) => a - b)
    
    let total = 0;
    for (let i = 0; i < A.length; i++) {
        total = total + (A[i] * B[i])
    }
    return total
}