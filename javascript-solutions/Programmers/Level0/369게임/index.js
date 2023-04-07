function solution(order) {
    return [...order.toString()].map(el => ['3', '6', '9'].includes(el) ? 1 : 0).reduce((a, b) => a + b)
}

// 정규식을 사용하는 방법
return [...order.toString().matchAll(/[3|6|9]/g)].length;

// string으로 변환하는 빠르고 좋은 방법!
(''+order).split(/[369]/).length - 1;