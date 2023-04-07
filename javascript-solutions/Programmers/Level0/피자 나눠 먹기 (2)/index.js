function solution(n) {
    let lcm = n > 6 ? n : 6;
   
    while (true) {
      if ((lcm % n == 0) && (lcm % 6 == 0)) {
        break;
      }
      lcm += 1;
    }
  	return lcm / 6
}