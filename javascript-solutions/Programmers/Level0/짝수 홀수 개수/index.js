function solution(num_list) {
    let even = 0;
    
    for (let i = 0; i <= num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            even += 1
        }
    }
    return [even, num_list.length - even]
}