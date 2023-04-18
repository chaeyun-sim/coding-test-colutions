function solution(dots) {
    let x = [];
    let y = [];
    
    for (let dot of dots) {
        x.push(dot[0])
        y.push(dot[1])
    }
    x = Array.from(new Set(x)).sort((a, b) => a - b)
    y = Array.from(new Set(y)).sort((a, b) => a - b)
    
    return (x[1] - x[0]) * (y[1] - y[0])
}

// sort하지 않고 min, max 쓸수도 있음
return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
