// 다른 사람들의 코드를 참고해서 작성하였다.

function solution(X, Y) {
    const arrX = new Array(10).fill(0);
    const arrY = new Array(10).fill(0);
    
    X.split('').forEach(x => arrX[x]++)
    Y.split('').forEach(y => arrY[y]++)
    
    let result = []
    for (let i = 0; i < 10; i++) {
        if (arrX[i] > 0 && arrY[i] > 0) {
            let times = arrX[i] > arrY[i] ? arrY[i] : arrX[i]
            for (let _ = 0; _ < times; _++) {
                result.push(i)
            }
        }
    }
    if (!result.length) return '-1'
    else if (!result.filter(el => el !== 0).length) return '0'
    else {
        return result.reverse().join('')
    }
}