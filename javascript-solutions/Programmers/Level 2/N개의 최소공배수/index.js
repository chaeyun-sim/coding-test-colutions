function solution(arr) {
    let lcm = 1;
   
    while (true) {
      if (arr.map(el => lcm % el).filter(v => v !== 0).length === 0) {
        break;
      }
      lcm++;
    }
  	return lcm
}



// 재귀함수로 풀기
function nlcm(num) {
 return num.reduce((a,b) => a*b / gcd(a,b))  
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}