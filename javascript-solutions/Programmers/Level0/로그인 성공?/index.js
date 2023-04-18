function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const arr = [];
    for (let info of db) {
        if (info[0] === id && info[1] === pw) arr.push('login')
        else if (info[0] === id && info[1] !== pw) arr.push('wrong pw')
    }
    return arr.length ? arr[0] : "fail"
}


// map 을 사용하는 방법
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}