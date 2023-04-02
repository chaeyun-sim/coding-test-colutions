function solution(sides) {
    sides.sort()
    if (sides[0] + sides[1] > sides[2]) return 1
    else return 2
}

// 삼항연산자를 쓸 수 있음!
// sides[0] + sides[1] > sides[2] ? 1 : 2