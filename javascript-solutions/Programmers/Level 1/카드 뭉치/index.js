// 20, 21, 24 실

function solution(cards1, cards2, goal) {
    let result = false;
    if (goal.filter(el => !cards2.includes(el)).join('') === cards1.join('')) {
        if (goal.filter(el => !cards1.includes(el)).join('') === cards2.join('')) {
            result = true
        }
}
    return result ? 'Yes' : 'No'
}


// 성공 
function solution(cards1, cards2, goal) {
    let result = true;
    for (let g of goal) {
        if (cards1[0] == g) cards1.shift();
        else if (cards2[0] == g) cards2.shift();
        else result = false
    }

    return result ? 'Yes' : 'No'
}