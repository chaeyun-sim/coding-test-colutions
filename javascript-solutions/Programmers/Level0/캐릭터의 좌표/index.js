function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    for (let command of keyinput) {
        switch(command){
            case 'left':
                if (-x < board[0] / 2 - 1) x -= 1; break;
            case 'right':
                if (x < board[0] / 2 - 1) x += 1; break;
            case 'up':
                if (y < board[1] / 2 - 1) y += 1; break;
            case 'down':
                if (-y < board[1] / 2 - 1) y -= 1; break;
        }
    }
    return [x, y];
}