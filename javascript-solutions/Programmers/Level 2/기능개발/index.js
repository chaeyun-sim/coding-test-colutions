function solution(progresses, speeds) {
    const arr = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]))
    
    let answer = []
    let max = arr[0]
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            answer.push(cnt)
            cnt = 0
            max = arr[i]
        }
        cnt++
    }
    answer.push(cnt)
    return answer
}


// 이렇게 접근하는 방법도 있다!

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}