function solution(price) {
    if(price >= 500000) {
        return Math.floor(price * 0.8)
    } else if(price >= 300000) {
        return Math.floor(price * 0.9)
    } else if(price >= 100000) {
        return Math.floor(price * 0.95)
    }
    return price;
}
// 제한 사항에 " 소수점 이하를 버린 정수 " 가 있다는 거 다시 확인하기!



// 배열을 사용해서 푸는 방법
const discounts = [[500000, 0.8], [300000, 0.9], [100000, 0.95]]
function solution(price) {
    for (const discount of discounts) {
        if (price >= discount[0]) {
            return Math.floor(price * discount[1])
        }
    }
}