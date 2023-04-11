function solution(emergency) {
    let sortedArr = [...emergency].sort((a, b) => b - a);
    return emergency.map(el => sortedArr.indexOf(el) + 1);
}