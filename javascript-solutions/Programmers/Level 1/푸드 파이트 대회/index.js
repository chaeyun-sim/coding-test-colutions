function solution(food) {
    const ate = []
    const foods = food.map((i => parseInt(i / 2)))
    foods.map((el, i) => ate.push((i + "").repeat(el)))
    return ate.join('') + "0" + ate.reverse().join('')
}