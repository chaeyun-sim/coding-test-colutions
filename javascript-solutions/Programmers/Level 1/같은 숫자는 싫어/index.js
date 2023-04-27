function solution(arr)
{
    const lst = [];
    arr.map((_, i) => arr[i] !== arr[i + 1] ? lst.push(arr[i]) : _)
    return lst
}