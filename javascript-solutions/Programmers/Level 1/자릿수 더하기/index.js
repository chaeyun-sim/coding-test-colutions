function solution(n)
{
    return [...n.toString()].map(el => parseInt(el)).reduce((a, b) => a + b)
}


// spread를 사용하지 않고 문자열로 만드는 팁
(n + "").split("")