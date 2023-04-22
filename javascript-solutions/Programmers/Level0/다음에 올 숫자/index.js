function solution(common) {
    const first = common[0]
    const second = common[1]
    const next = common[2]
    if (second - first === next - second){
        return common.pop() + second - first;
    }
    else{
        return common.pop() * second / first;
    }
}