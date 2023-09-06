function solution(citations) {
  citations = citations.sort((b, a) => b - a);

  let answer = [];
  for (let cit of citations) {
    let citated = citations.filter((el) => el >= cit);
    let notCitated = citations.filter((el) => el <= cit);
    if (citated.length <= cit && notCitated.length <= cit) {
      answer.push(cit);
    }
  }
  return answer.length;
}
