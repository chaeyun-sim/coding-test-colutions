function solution(park, routes) {
    let row = park.findIndex(el => el.includes('S'))
    let col = park[row].indexOf('S')
    for (let route of routes) {
        let [direction, step] = route.split(' ');
        step = Number(step)
        
        let testRow = row
        let testCol = col
        let flag = true;
        let testArr = []
        for (let i = 0; i < step; i++) {
            if (direction === 'S') testRow++
            else if (direction === 'N') testRow--
            else if (direction === 'E') testCol++
            else if (direction === 'W') testCol--
            
            if (testCol < 0 || testRow < 0 || testRow > park.length - 1 || testCol > park[0].length - 1 || park[testRow][testCol] === 'X') {
                flag = false
                break;
            } else {
                testArr.push([testRow, testCol])
            }
        }
        if (flag) {
            row = testArr[testArr.length - 1][0]
            col = testArr[testArr.length - 1][1]
        }
        testArr = []
    }
    return [row, col]
}