function solution(n, lost, reserve) {
    for (l of lost) {
        if (reserve.includes(l)) {
            lost = lost.filter(el => el !== l)
            reserve = reserve.filter(el => el !== l)
        }  
    }
    lost = lost.sort((a, b) => a - b)
    reserve = reserve.sort((a, b) => a - b)
    
    let answer = n - lost.length
    
    for (let i of lost) {
        if (!reserve) return;
        
        if (reserve.includes(i - 1)) {
            reserve = reserve.filter(el => el !== i - 1);
            answer++;
        } else if (reserve.includes(i + 1)) {
            reserve = reserve.filter(el => el !== i + 1);
            answer++;
        }
    }
    return answer
}