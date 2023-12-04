function solution(clothes) {
  let obj = {};
  let cnt = 1;

  clothes.forEach(item => {
    const key = item[1];

    if (!obj[key]) {
      obj[key] = [item[0]];
    } else {
      obj[key].push(item[0]);
    }
  });

  for (let key of Object.keys(obj)) {
    cnt *= obj[key].length + 1;
  }

  return (cnt -= 1);
}
