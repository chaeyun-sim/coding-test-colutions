function solution(box, n) {
    const vertical = Math.floor(box[1] / n)
    const horizontal = Math.floor(box[0] / n)
    const height = Math.floor(box[2] / n)
    return vertical * horizontal * height
}


// 배열에 변수를 지정해서 한줄로 반환하기
function solution(box, n) {
    let [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
}