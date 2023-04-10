function solution(letter) {
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f','--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l', '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r', '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x', '-.--':'y','--..':'z'}
    
    return letter.split(' ').map(el => morse[el]).join('')
}
    

// reduce를 사용한 풀이
function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}