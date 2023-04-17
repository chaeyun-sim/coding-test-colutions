function solution(s) {
    const string = s.split(' ');
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== 'Z') {
            total += Number(string[i])
        } else {
            total -= Number(string[i - 1])
        }
    }
    return total
}


// 아........stack....
function solution(s) {
  const stack = []
  const string = s.split(' ');

  string.map(target => target === 'Z' ? stack.pop() : stack.push(Number(target)))
  return stack.length ? stack.reduce((a, b) => a + b) : 0;
}