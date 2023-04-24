function solution(chicken) {
    let total = 0;
    let coupon = chicken

    while (coupon > 9){
        total += parseInt(coupon / 10)
        coupon = parseInt(coupon / 10) + coupon % 10
    }

    return total;
}


// 더 간단한 방법
function solution(chicken) {
    var answer = parseInt((chicken-1) / 9);
    return answer;
}